import AddressTable from "./components/AddressTable";
import AddressNav from "./components/AddressNav";
export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col h-[59vh] ">
      <header className="flex flex-row justify-between w-[80vw] mb-10">
        <h1 className="font-bold text-2xl">Adresy</h1>
        <AddressNav />
      </header>
      <AddressTable />
    </main>
  );
}
