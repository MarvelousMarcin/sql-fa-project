import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

type AddressType = {
  kod_kraju: string;
  wojewodztwo: string;
  kod_pocztowy: string;
  ulica: string;
  number_domu: number;
  number_lokalu: number;
  powiat: string;
};

export async function POST(request: Request) {
  const data = (await request.json()) as AddressType;

  const kod_kraju = data.kod_kraju;

  const id_kraju = await prisma.country.findUnique({ where: { kod_kraju } });

  const newAddress = await prisma.address.create({
    data: {
      kod_pocztowy: data.kod_pocztowy,
      id_kraju: id_kraju?.id,
      number_domu: data.number_domu,
      powiat: data.powiat,
      ulica: data.ulica,
      wojewodztwo: data.wojewodztwo,
      number_lokalu: data.number_lokalu,
    },
  });

  return NextResponse.json(newAddress, { status: 200 });
}
