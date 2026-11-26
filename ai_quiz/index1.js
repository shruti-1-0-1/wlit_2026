import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';


// Initialize Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents:"What is photosynthesis?",
       
    });

    console.log(response.text)
}

main();