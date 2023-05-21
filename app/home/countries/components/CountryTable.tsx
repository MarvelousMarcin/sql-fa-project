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

type CountryTableType = {
  filter: {
    name: string;
    value: string;
  };
};

const CountryTable = ({ filter, setData }: CountryTableType) => {
  const fetchCountries = () => {
    return axios.get("/api/getCountries");
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isLoading) return <div> </div>;
  let filteredData;
  if (filter.name !== "" && filter.value !== "") {
    filteredData = data?.data.filter((item) => {
      return item[filter.name] == filter.value;
    });
  } else {
    filteredData = data?.data;
    setData(filteredData);
  }
  return <CustomTable columns={columns} rows={filteredData} />;
};

export default CountryTable;
