import Header from "../components/header"
import Main from "../components/main"

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <Header />
        <Main />
      </div>
    </div>
  )
}