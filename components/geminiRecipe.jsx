import ReactMarkdown from "react-markdown"

export default function GeminiRecipe({ recipe }) {
    return (
        <section
            className="text-gray-700 leading-7 text-lg font-normal"
            aria-live="polite"
        >
            <h2 className="text-xl font-semibold mb-4">
                🇮🇳 Home Chef AI Recommends:
            </h2>
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
                <ReactMarkdown>{recipe}</ReactMarkdown>
            </div>
        </section>
    )
}
