import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

type ClientType = {
  nip: string;
  nazwa: string;
  id_adresu: number;
};

export async function POST(request: Request) {
  const data = (await request.json()) as ClientType;

  const newClient = await prisma.klient.create({
    data: {
      nazwa: data.nazwa,
      nip: data.nip,
      id_adresu: data.id_adresu,
    },
  });

  return NextResponse.json(newClient, { status: 200 });
}
