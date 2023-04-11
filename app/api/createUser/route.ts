import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

type User = {
  login: string;
  password: string;
  email: string;
};

export async function POST(request: Request) {
  const data = (await request.json()) as User;

  if (!data.email || !data.login || !data.password) {
    return NextResponse.json(
      { msg: "Żadne pole nie może być puste" },
      { status: 401 }
    );
  }

  try {
    // change if email exist
    const isEmail = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (isEmail) {
      return NextResponse.json(
        { msg: "Użytkownik o takim mailu już istnieje" },
        { status: 401 }
      );
    }

    // change if login exist
    const isLogin = await prisma.user.findUnique({
      where: { login: data.login },
    });

    if (isLogin) {
      return NextResponse.json(
        { msg: "Użytkownik o takim loginie już istnieje" },
        { status: 402 }
      );
    }

    // If all ok - hash password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(data.password, salt);

    const userCreation = await prisma.user.create({
      data: { email: data.email, login: data.login, password: hashPass },
    });

    if (userCreation) {
      return NextResponse.json(userCreation, { status: 200 });
    } else {
      return NextResponse.json({ msg: "Wystąpił błąd!" }, { status: 402 });
    }
  } catch (e) {
    return NextResponse.json({ msg: "Wystąpił błąd!" }, { status: 402 });
  }
}
