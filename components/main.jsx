import React, { lazy, Suspense } from "react";
import IngredientsList from "./IngredientsList";
// Lazy load GeminiRecipe instead of direct import
const GeminiRecipe = lazy(() => import("./geminiRecipe"));
import { getRecipeFromGemini } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "Indian spices",
    "cooking oil",
  ]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const recipeSection = React.useRef(null);

  React.useEffect(() => {
    if ((recipe || loading) && recipeSection.current !== null) {
      const yCoord =
        recipeSection.current.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: yCoord,
        behavior: "smooth",
      });
    }
  }, [recipe, loading]);

  async function getRecipe() {
    setLoading(true);
    setRecipe("");
    const recipeMarkdown = await getRecipeFromGemini(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(false);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim() !== "") {
      setIngredients((prev) => [...prev, newIngredient]);
    }
  }

  return (
    <main className="w-full flex flex-col items-center px-4 md:px-8 py-8 space-y-8">
      <h1 className="text-center text-xl md:text-2xl font-bold text-blue-900 max-w-xl leading-snug">
        Enter your ingredients — let AI craft an authentic Kerala recipe! 🍛🌴
      </h1>

      <form
        action={addIngredient}
        className="w-full flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. dal, rice, fish"
          aria-label="Add ingredient"
          className="flex-grow min-w-[200px] max-w-md rounded-xl border border-gray-300 px-4 py-2 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-medium shadow hover:bg-blue-700 transition"
        >
          + Add Ingredient
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
          className="text-center text-lg font-semibold text-orange-500 animate-pulse"
        >
          🍛 Generating your delicious recipe...
        </section>
      )}

      {!loading && recipe && (
        <div className="w-full">
          {/* Wrap GeminiRecipe in Suspense with fallback */}
          <Suspense fallback={<p className="text-center text-gray-500">Loading recipe...</p>}>
            <GeminiRecipe recipe={recipe} />
          </Suspense>
        </div>
      )}
    </main>
  );
}
