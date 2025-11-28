import { forwardRef } from "react";

const IngredientsList = forwardRef(function IngredientsList(props, ref) {
  const ingredientsListItems = props.ingredients.map((ingredient, index) => (
    <li
      key={ingredient}
      className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200 border border-transparent hover:border-green-200 hover:shadow-sm"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-sm group-hover:scale-110 transition-transform">
        {index + 1}
      </span>
      <span className="text-gray-800 text-base font-medium flex-1 capitalize">
        {ingredient}
      </span>
      <span className="text-2xl group-hover:scale-125 transition-transform">🍃</span>
    </li>
  ));

  return (
    <section className="w-full mb-12 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            Your Ingredients
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {props.ingredients.length} {props.ingredients.length === 1 ? 'ingredient' : 'ingredients'} ready to cook
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <ul
            className="space-y-2"
            aria-live="polite"
            role="list"
          >
            {ingredientsListItems}
          </ul>
        </div>

        {props.ingredients.length > 3 && (
          <div className="mt-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-2 border-orange-300 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div ref={ref} className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    Ready to Cook?
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Let AI craft a delicious Kerala-style recipe using your ingredients.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs md:text-sm text-orange-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Powered by Google Gemini AI</span>
                </div>
              </div>
              <button
                onClick={props.getRecipe}
                className="w-full lg:w-auto group relative bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <span className="text-2xl group-hover:rotate-12 transition-transform">🍲</span>
                <span className="text-base md:text-lg">Generate Recipe</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

export default IngredientsList;
