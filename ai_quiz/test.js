import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
import fs from "fs";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const imgPath = "C:/Users/Acer/Desktop/WLIT2026/ai_quiz/images/flower.png"
const imgData = fs.readFileSync(imgPath).toString("base64")
const follow_up_request = ["How many flowers are there?"];



const prompt=[
    {text: 'Describe the image in detail'},
    {inlineData: {mimeType:'image/png', data:imgData}}
]

async function main(){
    const history =[]; //the whole convo history, starts empty
    history.push({role:'user', parts: prompt})
    const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents:history,
    });
    console.log(response.text);
    history.push({role:'model', parts:[{text: response.text}]})
    for(const follow_up of follow_up_request){
        history.push({role:'user', parts:[{text: follow_up}]});

    const response2 = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: history,
    });
    console.log(response2.text);
    history.push({role:'model', parts:[{text:response2.text}]})
}
    
}
main();