"use client";

import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

type Product = {
  name: string;
  netto: number;
  brutto: number;
};

const AddProduct = ({ setShowBox }: { setShowBox: Function }) => {
  const [country, setCountry] = useState({ name: "", netto: 0, brutto: 0 });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newCountry: Product) => {
      return axios.post("/api/createProduct", newCountry);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setShowBox(false);
    },
  });

  const addCountryHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(country.brutto);
    if (Number(country.brutto) < 0) {
      toast.error("Cena nie może być mniejsza od zera");
      return;
    }
    if (Number(country.netto) < 0) {
      toast.error("Cena nie może być mniejsza od zera");
      return;
    }
    mutation.mutate(country);
  };

  return (
    <>
      <h1 className="font-bold text-2xl mb-10">Dodaj produkt</h1>
      <article className="flex flex-col justify-evenly gap-10">
        <section>
          <p className="font-bold">Nazwa:</p>
          <input
            onChange={(e) => {
              setCountry((c) => {
                return { ...c, name: e.target.value };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>
        <section>
          <p className="font-bold">Brutto:</p>
          <input
            onChange={(e) => {
              setCountry((c) => {
                return { ...c, netto: Number(e.target.value) };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>
        <section>
          <p className="font-bold">Netto:</p>
          <input
            onChange={(e) => {
              setCountry((c) => {
                return { ...c, brutto: Number(e.target.value) };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>
        <button
          onClick={addCountryHandler}
          className="bg-yellow px-5 py-2 text-black font-bold"
        >
          Dodaj
        </button>
      </article>
    </>
  );
};

export default AddProduct;
