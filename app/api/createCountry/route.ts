import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

type Country = {
  country: string;
  countryCode: string;
};

export async function POST(request: Request) {
  const data = (await request.json()) as Country;

  if (!data.country || !data.countryCode) {
    return NextResponse.json(
      { msg: "Żadne pole nie może być puste" },
      { status: 401 }
    );
  }

  const newCountry = await prisma.country.create({
    data: { kraj: data.country, kod_kraju: data.countryCode },
  });

  return NextResponse.json(newCountry, { status: 200 });
}
