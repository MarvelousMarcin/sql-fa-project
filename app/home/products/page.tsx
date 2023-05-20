"use client";

import ProductsNav from "./components/ProductsNav";
import ProductsTable from "./components/ProductsTable";
import { useState } from "react";
export default function Home() {
  const [deleting, setDeleting] = useState(false);
  return (
    <main className="flex justify-center items-center flex-col h-[59vh] ">
      <header className="flex flex-row justify-between w-[80vw] mb-10">
        <h1 className="font-bold text-2xl">Produkty</h1>
        <ProductsNav setDeleting={setDeleting} deleting={deleting} />
      </header>
      <ProductsTable deleting={deleting} />
    </main>
  );
}
