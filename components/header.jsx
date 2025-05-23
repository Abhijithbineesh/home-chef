export default function Header() {
  return (
    <header className="flex items-center justify-center gap-4 bg-white rounded-xl shadow-md p-4 md:p-6 mb-6">
      <img
        src="homecheflogo.png"
        alt="Chef Logo"
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
      />
      <h1 className="text-xl md:text-3xl font-semibold text-blue-900">
        🇮🇳 Home Chef AI
      </h1>
    </header>
  );
}


