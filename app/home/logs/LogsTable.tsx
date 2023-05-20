"use client";

import CustomTable from "@/app/components/Table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Column {
  id: "id" | "log" | "createdAt";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "id", label: "Id", minWidth: 50 },
  { id: "log", label: "Log", minWidth: 50 },
  {
    id: "createdAt",
    label: "Stworzono",
    minWidth: 50,
  },
];

const LogsTable = () => {
  const fetchCountries = () => {
    return axios.get("/api/getLogs");
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isLoading) return <div> </div>;

  return <CustomTable columns={columns} rows={data?.data} />;
};

export default LogsTable;
