import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const number_of_questions =3;
const topic ="Photosynthesis"
const no_of_options = 4;

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: `Give me ${number_of_questions} quiz questions on ${topic} with ${no_of_options}`,
        config: {
            systemInstruction: "You are an educational quiz generator. Create multiple choice questions with four options and one correct answer. The question should be clear and concise. Also give answers at end of all questions.",
            temperature: 0.3,
            responseMimeType: 'application/json',
            responseSchema: {
                type: 'object',
                properties: {
                    questions: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                question: { type: 'string' },
                                options: {
                                    type: 'array',
                                    items: { type: 'string' }
                                },
                                correctAnswer: { type: 'string' },
                                difficultyLevel: {type: 'string',
                                enum: ['Easy', 'Medium', 'Hard']}
                            },
                            required: ['question', 'options', 'correctAnswer', 'difficultyLevel']
                        }
                    }
                }
            }
        }
    });

    const quiz = JSON.parse(response.text);

    quiz.questions.forEach((q, index) => {
        console.log(`${index + 1}. ${q.question}`);
        q.options.forEach((option, optionIndex) => {
            console.log(`   ${String.fromCharCode(65 + optionIndex)}. ${option}`);
        });
        console.log(`Difficulty: ${q.difficultyLevel}`);
        console.log(`Correct answer: ${q.correctAnswer}\n`);
    });
}

main();