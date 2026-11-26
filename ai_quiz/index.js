
import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

// Initialize Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

// Initial variables
const number_of_questions = 3;
const topic = "Photosynthesis";
const no_of_options = 4;

const imgPath = "C:/Users/Acer/Desktop/WLIT2026/ai_quiz/images/note.png";
const imgData = fs.readFileSync(imgPath).toString('base64');

// Initial prompt
const prompt = [
    {
        text: `Attached is an image of a note. Generate ${number_of_questions} quiz questions based on that note.`
    },
    {
        inlineData: {
            mimeType: 'image/png',
            data: imgData
        }
    }
];

// Response schema
const resSchema = {
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
                    difficultyLevel: {
                        type: 'string',
                        enum: ['Easy', 'Medium', 'Hard']
                    }
                },
                required: [
                    'question',
                    'options',
                    'correctAnswer',
                    'difficultyLevel'
                ]
            }
        }
    },
    required: ['questions']
};

// Gemini configuration
const configContent = {
    systemInstruction: `You are an educational quiz generator.
    Create multiple choice questions with four options and one correct answer.
    Questions should only be based on the uploaded picture.
    Questions should be clear and concise.
    Do not repeat previously generated questions.
    Provide the correct answers for all questions.`,
    temperature: 0.3,
    responseMimeType: 'application/json',
    responseSchema: resSchema,
};

// Conversation history
const history = [];

async function generateQuiz(userPrompt) {

    // Add user message to history
    history.push({
        role: 'user',
        parts: userPrompt
    });

    const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: history,
        config: configContent,
    });

    // Add Gemini response to history
    history.push({
        role: 'model',
        parts: [{ text: response.text }]
    });

    const quiz = JSON.parse(response.text);

    // Display questions
    quiz.questions.forEach((q, index) => {
        console.log(`${index + 1}. ${q.question}`);

        q.options.forEach((option, optionIndex) => {
            console.log(
                `   ${String.fromCharCode(65 + optionIndex)}. ${option}`
            );
        });

        console.log(`Difficulty: ${q.difficultyLevel}`);
        console.log(`Correct answer: ${q.correctAnswer}\n`);
    });
}

async function main() {

    // First request: Generate quiz from image
    await generateQuiz(prompt);

    // Follow-up requests
    const follow_up_requests = [
        [{ text: "Generate 3 more questions, but make them harder." }],
        [{ text: "Explain the correct answers from the previous quiz." }],
        [{ text: "Generate 2 more questions without repeating previous questions." }]
    ];

    for (const follow_up of follow_up_requests) {
        console.log("\n========== FOLLOW-UP ==========\n");
        await generateQuiz(follow_up);
    }
}

main().catch(console.error);
