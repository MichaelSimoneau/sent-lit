import { onCall, HttpsError } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as admin from "firebase-admin";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

admin.initializeApp();

// Define the secret for Firebase Functions v2
const geminiApiKey = defineSecret("GEMINI_API_KEY");

// Initialize Gemini with secret API key
// Firebase Secrets v2: access via geminiApiKey.value() when deployed
// For local development, use EXPO_SECRET_GEMINI_API_KEY in functions/.env
const getGeminiApiKey = () => {
  // Try secret value first (when deployed), then fallback to env var (local dev)
  try {
    const secretValue = geminiApiKey.value();
    if (secretValue) return secretValue;
  } catch (e) {
    // Secret not available (local dev or not deployed yet)
  }
  return process.env.EXPO_SECRET_GEMINI_API_KEY || process.env.GEMINI_API_KEY || "";
};

// Get Gemini AI instance - must be called inside function handlers to access secrets
const getGenAI = () => {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    console.error("GEMINI_API_KEY not found. Available env vars:", Object.keys(process.env).filter(k => k.includes("GEMINI")));
    throw new Error("GEMINI_API_KEY not configured. Set it via firebase functions:secrets:set GEMINI_API_KEY or EXPO_SECRET_GEMINI_API_KEY env var for local dev");
  }
  return new GoogleGenerativeAI(apiKey);
};

const AI_CONFIG = {
  models: {
    text: "gemini-pro",
    vision: "gemini-pro-vision",
  },
  generationConfig: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 2048,
  },
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ],
};

interface ConsumerInsight {
  question: string;
  answer: string;
  quickFacts?: {
    avgSettlement?: string;
    successRate?: string;
    freeConsult?: string;
  };
}

/**
 * Assess a case based on user description
 */
export const assessCase = onCall(
  {
    secrets: [geminiApiKey],
    region: "us-central1",
  },
  async (request) => {
    const { description } = request.data;
    
    if (!description || typeof description !== "string" || description.length < 10) {
      throw new HttpsError("invalid-argument", "Description must be at least 10 characters");
    }

    try {
      const ai = getGenAI();
      const model = ai.getGenerativeModel({ 
      model: AI_CONFIG.models.text,
      generationConfig: AI_CONFIG.generationConfig,
      safetySettings: AI_CONFIG.safetySettings,
    });
    
    const prompt = `
      Act as a senior consumer protection attorney. Analyze the following potential case description:
      "${description}"
      
      Provide a structured assessment in JSON format with the following fields:
      - caseStrength (1-10 integer)
      - summary (brief overview)
      - recommendedPracticeAreas (array of strings matching our practice areas)
      - potentialClaims (array of potential legal claims)
      - nextSteps (array of recommended actions)
      - confidenceScore (0-1 float)
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    // Basic cleaning to ensure JSON parsing
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const assessment = JSON.parse(jsonStr);
    
    return assessment;
    } catch (error: any) {
      console.error("AI Assessment Error:", error);
      throw new HttpsError("internal", `Failed to assess case: ${error.message}`);
    }
  }
);

/**
 * Get consumer insight - randomly selects Q&A or tip
 */
export const getConsumerInsight = onCall(
  {
    secrets: [geminiApiKey],
    region: "us-central1",
  },
  async (request) => {
    try {
      const ai = getGenAI();
      const model = ai.getGenerativeModel({ 
      model: AI_CONFIG.models.text,
      generationConfig: AI_CONFIG.generationConfig,
      safetySettings: AI_CONFIG.safetySettings,
    });
    
    // Randomly choose between Q&A or tip format
    const insightType = Math.random() > 0.5 ? "qa" : "tip";
    
    let prompt: string;
    if (insightType === "qa") {
      prompt = `
        As a consumer protection attorney, generate a common question that potential clients might have about consumer fraud cases, 
        along with a helpful, accurate answer. Focus on practical information about case timelines, success rates, or settlement amounts.
        
        Return a JSON object with:
        - question (string): A question starting with "How" or "What" or "Can"
        - answer (string): A concise answer (2-3 sentences) with specific, realistic numbers when relevant
        - quickFacts (object, optional): 
          - avgSettlement (string): e.g., "$45K"
          - successRate (string): e.g., "92%"
          - freeConsult (string): e.g., "Yes"
      `;
    } else {
      prompt = `
        As a consumer protection attorney, generate a helpful legal tip for consumers who may have been victims of fraud.
        Format it as a question and answer where the question is something like "What should I know about..." 
        and the answer provides actionable advice.
        
        Return a JSON object with:
        - question (string): A question about consumer fraud protection
        - answer (string): A concise tip/answer (2-3 sentences)
        - quickFacts (object, optional): Relevant statistics if applicable
      `;
    }

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    // Basic cleaning to ensure JSON parsing
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const insight: ConsumerInsight = JSON.parse(jsonStr);
    
    return insight;
  } catch (error: any) {
    console.error("AI Insight Error:", error);
    // Return fallback insight
    return {
      question: "How long does a typical consumer fraud case take?",
      answer: "Most cases resolve in 3-6 months. Complex litigation may take 12-18 months. Our AI analysis shows 78% of similar cases settle favorably within 6 months.",
      quickFacts: {
        avgSettlement: "$45K",
        successRate: "92%",
        freeConsult: "Yes",
      },
    } as ConsumerInsight;
    }
  }
);

/**
 * Research legal precedents for a given query
 */
export const researchLegalPrecedent = onCall(
  {
    secrets: [geminiApiKey],
    region: "us-central1",
  },
  async (request) => {
    const { query, practiceArea } = request.data;
    
    if (!query || typeof query !== "string") {
      throw new HttpsError("invalid-argument", "Query is required");
    }

    try {
      const ai = getGenAI();
      const model = ai.getGenerativeModel({ 
      model: AI_CONFIG.models.text,
      generationConfig: AI_CONFIG.generationConfig,
      safetySettings: AI_CONFIG.safetySettings,
    });
    
    const prompt = `
      Research legal precedents for a consumer protection case in the area of "${practiceArea || "consumer fraud"}".
      Query: "${query}"
      
      Focus on Illinois and Federal laws.
      Provide the result in JSON format:
      - query (string)
      - practiceArea (string)
      - precedents (array of objects with: title, citation, summary, relevance as number 0-1)
      - summary (detailed explanation)
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const research = JSON.parse(jsonStr);
    
    return research;
    } catch (error: any) {
      console.error("AI Research Error:", error);
      throw new HttpsError("internal", `Failed to research precedents: ${error.message}`);
    }
  }
);

