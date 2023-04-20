import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

type Log = {
  log: string;
};

export async function POST(request: Request) {
  const data = (await request.json()) as Log;

  const log = data.log;

  const newLog = await prisma.log.create({ data: { log } });

  return NextResponse.json(newLog, { status: 200 });
}
