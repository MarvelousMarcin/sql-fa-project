import CustomTable from "@/app/components/Table";
import CountryNav from "./components/CountryNav";
import AddCountry from "./components/AddCountry";
import CountryTable from "./components/CountryTable";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col h-[59vh] ">
      <header className="flex flex-row justify-between w-[80vw] mb-10">
        <h1 className="font-bold text-2xl">Kraje</h1>
        <CountryNav>
          <AddCountry />
        </CountryNav>
      </header>
      <CountryTable />
    </main>
  );
}
