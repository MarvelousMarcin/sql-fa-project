import ClientTable from "./components/ClientTable";
import ClientNav from "./components/ClientNav";
export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col h-[59vh] ">
      <header className="flex flex-row justify-between w-[80vw] mb-10">
        <h1 className="font-bold text-2xl">Klienci</h1>
        <ClientNav />
      </header>
      <ClientTable />
    </main>
  );
}
