import Logo from "./components/Logo";
import Login from "./components/Login";
import Buttons from "./components/Buttons";
import foto from "./assets/115.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <header className="flex justify-between flex-row px-10 h-[11vh] items-center">
        <Logo />
        <Login />
      </header>
      <section className="flex flex-col justify-center items-center h-[89vh] gap-4">
        <h1 className="text-4xl text-center">
          Narzędzie pozwalające na generację xml{" "}
          <span className="text-yellow font-bold">JPK FA</span> <br /> w wersji
          trzeciej
        </h1>
        <p className="text-[#807F7F] text-xl">
          Twórz faktury w sposób prosty i szybki. Pozwól nam zająć się resztą.
        </p>
        <Buttons />
        <Image alt="" height={700} width={700} src={foto} />
      </section>
    </main>
  );
}
