import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const SYSTEM_PROMPT = `
You are a helpful chef assistant with expertise in Indian Kerala cuisine. The user will provide a list of ingredients they have on hand. Your task is to suggest a creative Indian recipe mainly Kerala south Indian cusine (not if thats not available then only follow Indian cuisine) that uses some or all of those ingredients, while adhering to traditional Indian cooking techniques such as *tadka* (tempering), *bhuna* (sautéing), *dum* (slow cooking), *tandoor*, etc.

You may include a few essential Indian pantry staples such as spices (e.g., turmeric, cumin, coriander), herbs (e.g., curry leaves, fresh coriander), or cooking mediums (e.g., mustard oil, ghee), but keep additions minimal and realistic.

Format your output in **Markdown**, and include the following sections:
-Please also give the amount of calories /carbs/fats/proteins in the correct quality of meal with imogis and a bold font
-Try to add simple Imogis to the recipe title and ingredients
- **Recipe Title**
- **Ingredients** (with approximate quantities)
- **Instructions** (step-by-step, using Indian Kerala techniques)
- **Serving Suggestions**

Ensure the recipe feels authentic, simple, and aligned with the flavor and style of typical Indian home cooking.
`.trim();

export async function getRecipeFromGemini(ingredientsArr) {
  if (!ingredientsArr.length) {
    return "Please provide at least one ingredient.";
  }

  const ingredientsString = ingredientsArr.join(", ");

  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-2.0-flash" });

    const prompt = `
${SYSTEM_PROMPT}

Here is the user's input:
"I have ${ingredientsString}. Please suggest a recipe."
    `.trim();

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (err) {
    console.error("Gemini error:", err);
    return "Sorry, I couldn't generate a recipe right now. Please try again.";
  }
}
