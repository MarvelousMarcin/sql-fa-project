import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const countries = await prisma.address.findMany({ include: { kraj: true } });

  return NextResponse.json(countries, { status: 200 });
}
