import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
// In a real deployment, ensure this is handled via proxy or environment variable injection that is safe.

let ai: GoogleGenAI | null = null;

if (apiKey) {
    ai = new GoogleGenAI({ apiKey: apiKey });
}

export const askHistorian = async (question: string): Promise<string> => {
  if (!ai) {
      return "I apologize, but my communication lines to High Command (API Key) are severed. Please check your configuration.";
  }

  try {
    const systemInstruction = `You are a World War II historian specializing in Operation Overlord (D-Day). 
    Your name is "Archives Officer".
    Provide accurate, historical answers about the Normandy Landings. 
    Keep answers concise (under 150 words) unless asked for detail.
    Tone: Professional, slightly formal, respectful of the gravity of the event.
    If the question is unrelated to WWII, politely steer the conversation back to 1944.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Transmission unclear. Please repeat the query.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Static on the line. Unable to retrieve historical records at this moment.";
  }
};