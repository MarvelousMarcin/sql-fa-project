import FakturyNav from "./components/FakturyNav";
import Faktury from "./components/Faktury";
export default function Home() {
  return (
    <main className="flex justify-start items-center flex-col h-[59vh] ">
      <header className="flex flex-row justify-between w-[80vw] mt-10">
        <h1 className="font-bold text-2xl">Faktury</h1>
        <FakturyNav />
      </header>
      <Faktury />
    </main>
  );
}
