"use client";

import { useState } from "react";
import CountryNav from "./components/CountryNav";
import CountryTable from "./components/CountryTable";

export default function Home() {
  const [filter, setFilter] = useState({ name: "", value: "" });
  const [data, setData] = useState([]);

  return (
    <main className="flex justify-center items-center flex-col h-[59vh] ">
      <header className="flex flex-row justify-between w-[80vw] mb-10">
        <h1 className="font-bold text-2xl">Kraje</h1>
        <CountryNav setFilter={setFilter} data={data} />
      </header>
      <CountryTable filter={filter} setData={setData} />
    </main>
  );
}
