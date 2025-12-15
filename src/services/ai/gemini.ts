import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_CONFIG } from "../../config/ai";
import { AIAssessment, AIDocumentAnalysis, AILegalResearch } from "../../types/content";

// Initialize Gemini Client
const genAI = new GoogleGenerativeAI(AI_CONFIG.apiKey);

export const AIService = {
  /**
   * Assess a case based on user description
   */
  async assessCase(description: string): Promise<AIAssessment> {
    try {
      const model = genAI.getGenerativeModel({ model: AI_CONFIG.models.text });
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
      
      // Basic cleaning to ensure JSON parsing - in production use more robust parsing
      const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(jsonStr) as AIAssessment;
    } catch (error) {
      console.error("AI Assessment Error:", error);
      throw new Error("Failed to assess case. Please try again.");
    }
  },

  /**
   * Research legal precedents for a given query
   */
  async researchLegalPrecedent(query: string, practiceArea: string): Promise<AILegalResearch> {
    try {
      const model = genAI.getGenerativeModel({ model: AI_CONFIG.models.text });
      const prompt = `
        Research legal precedents for a consumer protection case in the area of "${practiceArea}".
        Query: "${query}"
        
        Focus on Illinois and Federal laws.
        Provide the result in JSON format:
        - query
        - relevantLaws (array)
        - precedents (array of case names/citations)
        - explanation (detailed explanation)
      `;

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      
      const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(jsonStr) as AILegalResearch;
    } catch (error) {
      console.error("AI Research Error:", error);
      throw new Error("Failed to research precedents.");
    }
  },

  /**
   * Translate content to target language
   */
  async translateContent(text: string, targetLang: string): Promise<string> {
    try {
      const model = genAI.getGenerativeModel({ model: AI_CONFIG.models.text });
      const prompt = `Translate the following legal text to ${targetLang}. Ensure legal terminology is accurate.\n\n${text}`;
      
      const result = await model.generateContent(prompt);
      const response = result.response;
      return response.text();
    } catch (error) {
      console.error("AI Translation Error:", error);
      return text; // Fallback to original text
    }
  },

  /**
   * Generate suggestions for form completion
   */
  async generateFormSuggestions(partialInput: string, fieldName: string): Promise<string[]> {
    try {
      const model = genAI.getGenerativeModel({ model: AI_CONFIG.models.text });
      const prompt = `
        The user is filling out a legal consultation form. 
        Field: ${fieldName}
        Current Input: "${partialInput}"
        
        Suggest 3 likely completions or refinements for a consumer fraud case. Return as a JSON array of strings.
      `;
      
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(jsonStr) as string[];
    } catch (error) {
      return [];
    }
  }
};

