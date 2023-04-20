import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

type Product = {
  name: string;
  netto: number;
  brutto: number;
};

export async function POST(request: Request) {
  const data = (await request.json()) as Product;

  const newProduct = await prisma.produkt.create({
    data: { nazwa: data.name, brutto: data.brutto, netto: data.brutto },
  });

  return NextResponse.json(newProduct, { status: 200 });
}
