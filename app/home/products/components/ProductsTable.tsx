"use client";

import CustomTable from "@/app/components/Table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Column {
  id: "id" | "nazwa" | "netto" | "brutto";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "id", label: "Id", minWidth: 50 },
  { id: "nazwa", label: "Nazwa", minWidth: 50 },
  {
    id: "netto",
    label: "Netto",
    minWidth: 50,
  },
  {
    id: "brutto",
    label: "Brutto",
    minWidth: 50,
  },
];

const ProductsTable = ({ deleting, setData }) => {
  const fetchCountries = () => {
    return axios.get("/api/getProducts");
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchCountries,
  });

  if (isLoading) return <div> </div>;
  setData(data?.data);
  return (
    <CustomTable columns={columns} rows={data?.data} deleting={deleting} />
  );
};

export default ProductsTable;
