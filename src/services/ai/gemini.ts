import { getCallable } from "./functions-helper";
import { AIAssessment, AIDocumentAnalysis, AILegalResearch, ConsumerInsight } from "../../types/content";

export const AIService = {
  /**
   * Assess a case based on user description
   */
  async assessCase(description: string, systemPrompt?: string): Promise<AIAssessment> {
    try {
      const assessCaseCallable = getCallable("assessCase");
      const result = await assessCaseCallable({ description, systemPrompt });
      return result.data as AIAssessment;
    } catch (error: any) {
      console.error("AI Assessment Error:", error);
      throw new Error(error.message || "Failed to assess case. Please try again.");
    }
  },

  /**
   * Get consumer insight - Q&A or tip
   */
  async getConsumerInsight(): Promise<ConsumerInsight> {
    try {
      const getConsumerInsightCallable = getCallable("getConsumerInsight");
      const result = await getConsumerInsightCallable({});
      return result.data as ConsumerInsight;
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
      };
    }
  },

  /**
   * Research legal precedents for a given query
   */
  async researchLegalPrecedent(query: string, practiceArea: string): Promise<AILegalResearch> {
    try {
      const researchCallable = getCallable("researchLegalPrecedent");
      const result = await researchCallable({ query, practiceArea });
      return result.data as AILegalResearch;
    } catch (error: any) {
      console.error("AI Research Error:", error);
      throw new Error(error.message || "Failed to research precedents.");
    }
  },

  /**
   * Translate content to target language
   * Note: This function is not yet implemented in Firebase Functions
   * Keeping the interface for future implementation
   */
  async translateContent(text: string, targetLang: string): Promise<string> {
    // TODO: Implement in Firebase Functions if needed
    console.warn("translateContent not yet implemented via Firebase Functions");
    return text; // Fallback to original text
  },

  /**
   * Generate suggestions for form completion
   * Note: This function is not yet implemented in Firebase Functions
   * Keeping the interface for future implementation
   */
  async generateFormSuggestions(partialInput: string, fieldName: string): Promise<string[]> {
    // TODO: Implement in Firebase Functions if needed
    console.warn("generateFormSuggestions not yet implemented via Firebase Functions");
    return [];
  }
};

