import bcrypt from "bcrypt";
import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

type User = {
  login: string;
  password: string;
};

export async function POST(request: Request) {
  const data = (await request.json()) as User;

  if (!data.login || !data.password) {
    return NextResponse.json({ msg: "Złe dane" }, { status: 401 });
  }

  const findUser = await prisma.user.findUnique({
    where: { login: data.login },
  });

  const comparePass = await bcrypt.compare(
    data.password,
    findUser?.password as string
  );

  if (comparePass) {
    const JWT = jwt.sign(
      {
        data: { id: findUser?.id, login: findUser?.login },
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      process.env.JWT_SECRET as string
    );

    return NextResponse.json({ token: JWT }, { status: 200 });
  } else {
    return NextResponse.json({ msg: "Złe dane" }, { status: 401 });
  }
}
