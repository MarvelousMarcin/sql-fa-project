import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const clients = await prisma.klient.findMany({ include: { adres: true } });

  return NextResponse.json(clients, { status: 200 });
}
