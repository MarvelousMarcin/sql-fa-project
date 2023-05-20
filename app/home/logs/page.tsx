import LogsTable from "./LogsTable";

export default function Logs() {
  return (
    <div>
      <main className="flex justify-center items-center flex-col h-[59vh] ">
        <header className="flex flex-row justify-between w-[80vw] mb-10">
          <h1 className="font-bold text-2xl">Logi</h1>
        </header>
        <LogsTable />
      </main>
    </div>
  );
}
