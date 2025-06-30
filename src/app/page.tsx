// src/app/page.tsx

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">🔧 Página en construcción</h1>
      <p className="mb-6 text-lg">Estamos trabajando en algo especial para ti...</p>
      <Link
        href="/tienda"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Ir a la Tienda
      </Link>
    </main>
  )
}