"use client";

import CustomTable from "@/app/components/Table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Column {
  id:
    | "id"
    | "kraj"
    | "wojewodztwo"
    | "kod_pocztowy"
    | "ulica"
    | "number_domu"
    | "number_lokalu"
    | "powiat";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "id", label: "Id", minWidth: 50 },
  { id: "kraj", label: "Kraj", minWidth: 50 },
  {
    id: "wojewodztwo",
    label: "Wojewodztwo",
    minWidth: 50,
  },
  {
    id: "kod_pocztowy",
    label: "Kod Pocztowy",
    minWidth: 50,
  },
  {
    id: "ulica",
    label: "Ulica",
    minWidth: 50,
  },
  {
    id: "number_domu",
    label: "Numer domu",
    minWidth: 50,
  },
  {
    id: "number_lokalu",
    label: "Numer Lokalu",
    minWidth: 50,
  },
  {
    id: "powiat",
    label: "Powiat",
    minWidth: 50,
  },
];

const AddressTable = ({ setData }) => {
  const fetchAddr = () => {
    return axios.get("/api/getAddresses");
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["addresses"],
    queryFn: fetchAddr,
  });

  if (isLoading) return <div> </div>;
  setData(data?.data);
  const newAddr = data?.data.map((elem) => {
    return { ...elem, kraj: elem.kraj.kraj };
  });

  return <CustomTable columns={columns} rows={newAddr} />;
};

export default AddressTable;
