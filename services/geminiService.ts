import { GoogleGenAI } from "@google/genai";
import { ResumeData } from "../types";

const apiKey = process.env.API_KEY || '';

export const getResumeReview = async (data: ResumeData): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      You are a senior engineering career coach. Review the following CV data for a Computer Engineering Student named ${data.name}.
      
      CV Data:
      ${JSON.stringify(data)}

      Please provide a concise, 3-bullet point summary of strengths and 1 suggestion for improvement to make this CV stand out for top-tier engineering internships. 
      Keep the tone encouraging but professional. 
      Format the response as HTML (using <strong> for emphasis, <ul> for lists). Do not wrap in markdown code blocks.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate a review at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while contacting the AI career coach.";
  }
};