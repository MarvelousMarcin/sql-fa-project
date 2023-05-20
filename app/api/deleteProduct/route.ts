import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const id = data.data.id;
  console.log(id);

  await prisma.produkt.delete({ where: { id: Number(id) } });

  return NextResponse.json({}, { status: 200 });
}
