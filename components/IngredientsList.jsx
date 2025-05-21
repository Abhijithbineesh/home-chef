import React, { forwardRef } from "react"

const IngredientsList = forwardRef(function IngredientsList(props, ref) {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient} className="text-gray-700 leading-7">{ingredient}</li>
    ))

    return (
        <section className="mb-12">
            <h2 className="text-lg font-semibold mb-2">Ingredients on hand:</h2>
            <ul className="mb-6" aria-live="polite">{ingredientsListItems}</ul>

            {props.ingredients.length > 3 && (
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-lg bg-[#F0EFEB] px-6 py-4">
                    <div ref={ref}>
                        <h3 className="text-base font-medium">Ready for a recipe?</h3>
                        <p className="text-sm text-gray-500">
                            Generate a recipe from your list of ingredients.
                        </p>
                    </div>
                    <button
                        onClick={props.getRecipe}
                        className="rounded-md bg-[#D17557] text-white px-4 py-2 text-sm font-inter shadow-sm hover:bg-[#c26345] transition"
                    >
                        Get a recipe
                    </button>
                </div>
            )}
        </section>
    )
})

export default IngredientsList
