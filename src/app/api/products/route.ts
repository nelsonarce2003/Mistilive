// src/app/api/products/route.ts
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const products = await prisma.product.findMany()
    return NextResponse.json(products)
  } catch (error) {
    console.error("Error al obtener productos:", error)
    return new NextResponse("Error en el servidor", { status: 500 })
  }
}