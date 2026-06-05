const {GoogleGenAI} = require('@google/genai');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});


async function aiResponse(question) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: question,
  });
  return response.text;
}
module.exports = aiResponse;