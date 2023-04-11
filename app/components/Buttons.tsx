"use client";
import { useRouter } from "next/navigation";

const Buttons = () => {
  const router = useRouter();

  return (
    <article className="flex gap-6 mt-4">
      <button
        onClick={() => router.push("/register")}
        className="border-4 border-yellow p-2 w-[12rem] font-bold"
      >
        Stwórz konto
      </button>
      <button className="border-4 bg-yellow border-yellow p-2 text-black w-[12rem] font-bold">
        Dowiedz się więcej
      </button>
    </article>
  );
};

export default Buttons;
