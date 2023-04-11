"use client";

import { useUserContext } from "../components/ContextProvider";

export default function Home() {
  const { state } = useUserContext();
  return <main className="w-screen h-screen">{state.token}</main>;
}
