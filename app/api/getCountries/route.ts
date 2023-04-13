import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const countries = await prisma.country.findMany();

  return NextResponse.json(countries, { status: 200 });
}
