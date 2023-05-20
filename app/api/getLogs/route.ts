import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const countries = await prisma.log.findMany();

  return NextResponse.json(countries, { status: 200 });
}
