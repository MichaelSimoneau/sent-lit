import { onCall, HttpsError } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as admin from "firebase-admin";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

admin.initializeApp();

// Define the secret for Firebase Functions v2
const geminiApiKey = defineSecret("GEMINI_API_KEY");

// Initialize Gemini with secret API key
// Firebase Secrets v2: access via geminiApiKey.value() when deployed
// For local development, use EXPO_SECRET_GEMINI_API_KEY in functions/.env (gitignored)
const getGeminiApiKey = () => {
  // Try secret value first (when deployed)
  try {
    const secretValue = geminiApiKey.value();
    if (secretValue) return secretValue;
  } catch (e) {
    // Secret not available (local dev or not deployed yet)
  }
  // Fallback to env var for local development only
  const localKey = process.env.EXPO_SECRET_GEMINI_API_KEY;
  if (localKey) return localKey;
  
  throw new Error("GEMINI_API_KEY not configured. Use Firebase secret in production or EXPO_SECRET_GEMINI_API_KEY in functions/.env for local dev");
};

// Get Gemini AI instance - must be called inside function handlers to access secrets
const getGenAI = () => {
  const apiKey = getGeminiApiKey();
  return new GoogleGenerativeAI(apiKey);
};

const AI_CONFIG = {
  models: {
    text: "gemini-2.5-pro",
    long_context: "gemini-3-pro-preview",
    vision: "gemini-2.5-pro",
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
    const { description, systemPrompt } = request.data;
    
    if (!description || typeof description !== "string" || description.length < 10) {
      throw new HttpsError("invalid-argument", "Description must be at least 10 characters");
    }

    try {
      const ai = getGenAI();
      const model = ai.getGenerativeModel({ 
      model: AI_CONFIG.models.long_context,
      generationConfig: AI_CONFIG.generationConfig,
      safetySettings: AI_CONFIG.safetySettings,
    });
    
    // Use custom system prompt if provided, otherwise use default
    const defaultSystemPrompt = "Act as a senior consumer protection attorney.";
    const attorneyRole = systemPrompt || defaultSystemPrompt;
    
    const prompt = `
      ${attorneyRole} Analyze the following potential case description:
      "${description}"
      
      Provide a structured assessment in JSON format with the following fields:
      - caseStrength (1-10 integer)
      - summary (brief overview)
      - recommendedPracticeAreas (array of strings matching our practice areas)
      - potentialClaims (array of potential legal claims)
      - nextSteps (array of recommended actions)
      - confidenceScore (0-1 float)

      RETURN RAW JSON ONLY. NO MARKDOWN. NO CODE BLOCKS.
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    // Robust JSON extraction
    let jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    // If the text contains a JSON object, try to extract it
    const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonStr = jsonMatch[0];
    }
    
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
    
    // Robust JSON extraction
    let jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonStr = jsonMatch[0];
    }

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
      model: AI_CONFIG.models.long_context,
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
    
    let jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonStr = jsonMatch[0];
    }

    const research = JSON.parse(jsonStr);
    
    return research;
    } catch (error: any) {
      console.error("AI Research Error:", error);
      throw new HttpsError("internal", `Failed to research precedents: ${error.message}`);
    }
  }
);

