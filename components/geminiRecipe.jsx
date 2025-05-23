import ReactMarkdown from "react-markdown";

export default function GeminiRecipe({ recipe }) {
  return (
    <section
      className="w-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg text-gray-800"
      aria-live="polite"
    >
      <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
        🇮🇳 Home Chef AI Recommends
      </h2>
      <div className="prose prose-sm sm:prose md:prose-lg lg:prose-xl max-w-none text-left">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </div>
    </section>
  );
}
