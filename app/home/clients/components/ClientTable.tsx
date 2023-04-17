"use client";

import CustomTable from "@/app/components/Table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Column {
  id: "id" | "nip" | "adres" | "nazwa";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "id", label: "Id", minWidth: 50 },
  { id: "nip", label: "NIP", minWidth: 50 },
  {
    id: "adres",
    label: "Adres",
    minWidth: 50,
  },
  {
    id: "nazwa",
    label: "Nazwa",
    minWidth: 50,
  },
];

const ClientTable = () => {
  const fetchClients = () => {
    return axios.get("/api/getClients");
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["clients"],
    queryFn: fetchClients,
  });

  if (isLoading) return <div> </div>;
  const mapped = data?.data.map((elem) => {
    return {
      ...elem,
      adres: `${elem.adres.ulica} ${elem.adres.number_domu} ${elem.adres.wojewodztwo}`,
    };
  });
  console.log(data);
  return <CustomTable columns={columns} rows={mapped} />;
};

export default ClientTable;
