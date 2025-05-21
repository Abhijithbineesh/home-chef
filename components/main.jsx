import React from "react"
import IngredientsList from "./IngredientsList"
import GeminiRecipe from "./geminiRecipe"
import { getRecipeFromGemini } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([
        "Indian spices", "cooking oil"
    ])
    const [recipe, setRecipe] = React.useState("")
    const [loading, setLoading] = React.useState(false) // ⬅️ NEW
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if ((recipe || loading) && recipeSection.current !== null) {
            const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
        }
    }, [recipe, loading]) // ⬅️ include loading

    async function getRecipe() {
        setLoading(true)
        setRecipe("") // optional: clear previous recipe
        const recipeMarkdown = await getRecipeFromGemini(ingredients)
        setRecipe(recipeMarkdown)
        setLoading(false)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient.trim() !== "") {
            setIngredients(prev => [...prev, newIngredient])
        }
    }

    return (
        <main className="px-6 py-8">
            <form
                action={addIngredient}
                className="flex flex-col sm:flex-row justify-center gap-3 h-10 mb-6"
            >
                <input
                    type="text"
                    name="ingredient"
                    placeholder="e.g dal, rice, fish"
                    aria-label="Add ingredient"
                    className="rounded-md border border-gray-300 px-3 py-2 shadow-sm flex-grow min-w-[150px] max-w-[400px]"
                />
                <button
                    type="submit"
                    className="rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-800 transition"
                >
                    + Add ingredient
                </button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            )}

            {loading && (
                <section
                    ref={recipeSection}
                    className="text-center mt-10 text-lg font-semibold text-orange-600 animate-pulse"
                >
                    🍛 Generating your delicious recipe...
                </section>
            )}

            {!loading && recipe && (
                <GeminiRecipe recipe={recipe} />
            )}
        </main>
    )
}
