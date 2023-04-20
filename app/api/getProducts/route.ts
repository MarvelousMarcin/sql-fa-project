import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const products = await prisma.produkt.findMany({});

  return NextResponse.json(products, { status: 200 });
}
