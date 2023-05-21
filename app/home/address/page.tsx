"use client";

import AddressTable from "./components/AddressTable";
import { useState } from "react";
import AddressNav from "./components/AddressNav";
export default function Home() {
  const [data, setData] = useState([]);

  return (
    <main className="flex justify-center items-center flex-col h-[59vh] ">
      <header className="flex flex-row justify-between w-[80vw] mb-10">
        <h1 className="font-bold text-2xl">Adresy</h1>
        <AddressNav data={data} />
      </header>
      <AddressTable setData={setData} />
    </main>
  );
}
