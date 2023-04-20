import ProductsNav from "./components/ProductsNav";
import ProductsTable from "./components/ProductsTable";
export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col h-[59vh] ">
      <header className="flex flex-row justify-between w-[80vw] mb-10">
        <h1 className="font-bold text-2xl">Produkty</h1>
        <ProductsNav />
      </header>
      <ProductsTable />
    </main>
  );
}
