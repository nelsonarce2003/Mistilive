// src/app/tienda/page.tsx
'use client'

import { useEffect, useState } from 'react'

type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default function Tienda() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🛍️ Tienda Sistemica</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-green-700 font-bold mt-1">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}