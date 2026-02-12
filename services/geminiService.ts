
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert AI assistant for "RC Sump Solutions," a professional sump pit installation company based in Rapid City, South Dakota. 
Your goal is to provide technical advice about sump pumps, radon sealing, and basement waterproofing to homeowners.
Key facts about the company:
- Address: 500 Main St, Rapid City, SD 57701
- Phone: (844) 340-6413
- Specialties: Secondary jackhammering, Radon Sealed Lids, Basement Waterproofing.
- Tone: Professional, helpful, safety-conscious.
- Location Context: South Dakota has high radon levels and heavy seasonal rains/snowmelt that lead to basement flooding.

Answer questions clearly and concisely. If a user wants a quote, tell them to use the "Get a Free Quote" button on the website or call (844) 340-6413.
`;

export async function getSmartResponse(prompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: Unable to connect to the smart assistant. Please try calling us directly.";
  }
}
