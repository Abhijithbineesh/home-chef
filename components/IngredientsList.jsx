import { forwardRef } from "react";

const IngredientsList = forwardRef(function IngredientsList(props, ref) {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient} className="text-gray-700 text-base leading-6">
      🍃 {ingredient}
    </li>
  ));

  return (
    <section className="w-full mb-12">
      <h2 className="text-xl font-semibold text-blue-800 mb-3 text-center">
        Ingredients on Hand
      </h2>

      <ul
        className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm space-y-2 mb-6 max-w-xl mx-auto"
        aria-live="polite"
      >
        {ingredientsListItems}
      </ul>

      {props.ingredients.length > 3 && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-orange-100 to-yellow-50 border border-orange-200 rounded-xl px-6 py-5 shadow-md">
          <div ref={ref}>
            <h3 className="text-base font-semibold text-gray-800 mb-1">
              Ready for a recipe?
            </h3>
            <p className="text-sm text-gray-600">
              Generate a recipe from your current ingredients.
            </p>
          </div>
          <button
            onClick={props.getRecipe}
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-xl text-sm font-medium shadow"
          >
            🍲 Get a Recipe
          </button>
        </div>
      )}
    </section>
  );
});

export default IngredientsList;
