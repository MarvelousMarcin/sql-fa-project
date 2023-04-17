"use client";

import CustomTable from "@/app/components/Table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Column {
  id: "id" | "kraj" | "kod_kraju";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "id", label: "Id", minWidth: 50 },
  { id: "kraj", label: "Kraj", minWidth: 50 },
  {
    id: "kod_kraju",
    label: "Kod Kraju",
    minWidth: 50,
  },
];

interface Data {
  id: number;
  kod_kraju: string;
  countryCode: string;
}
const CountryTable = () => {
  const fetchCountries = () => {
    return axios.get("/api/getCountries");
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isLoading) return <div> </div>;

  return <CustomTable columns={columns} rows={data?.data} />;
};

export default CountryTable;
