import CustomTable from "@/app/components/Table";
import Image from "next/image";
import plus from "../../assets/plus.svg";
import trash from "../../assets/trash.svg";

interface Column {
  id: "id" | "country" | "country_code";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "id", label: "Id", minWidth: 50 },
  { id: "country", label: "Kraj", minWidth: 50 },
  {
    id: "country_code",
    label: "Kod Kraju",
    minWidth: 50,
  },
];

interface Data {
  id: number;
  country: string;
  country_code: string;
}

const rows: Data[] = [
  { id: 1, country: "Polska", country_code: "PLK" },
  { id: 1, country: "Polska", country_code: "PLK" },
  { id: 1, country: "Polska", country_code: "PLK" },
  { id: 1, country: "Polska", country_code: "PLK" },
  { id: 1, country: "Polska", country_code: "PLK" },
  { id: 1, country: "Polska", country_code: "PLK" },
];

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col h-[59vh] ">
      <header className="flex flex-row justify-between w-[80vw] mb-10">
        <h1 className="font-bold text-2xl">Kraje</h1>
        <nav className="flex flex-row gap-3">
          <Image
            className="cursor-pointer"
            alt=""
            src={plus}
            width={25}
            height={25}
          />
          <Image
            className="cursor-pointer"
            alt=""
            src={trash}
            width={25}
            height={25}
          />
        </nav>
      </header>
      <CustomTable columns={columns} rows={rows} />
    </main>
  );
}
