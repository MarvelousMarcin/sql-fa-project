"use client";

import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type AddressType = {
  kod_kraju: string;
  wojewodztwo: string;
  kod_pocztowy: string;
  ulica: string;
  number_domu: number;
  number_lokalu: number;
  powiat: string;
};

const AddAddress = ({ setShowBox }: { setShowBox: Function }) => {
  const [address, setAddress] = useState({
    kod_kraju: "0",
    wojewodztwo: "",
    kod_pocztowy: "",
    ulica: "",
    number_domu: 0,
    number_lokalu: 0,
    powiat: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newCountry: AddressType) => {
      return axios.post("/api/createAddress", newCountry);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
      setShowBox(false);
    },
  });

  const addCountryHandler = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(address);
  };

  return (
    <>
      <h1 className="font-bold text-2xl mb-10">Dodaj adres</h1>
      <article className="flex flex-col justify-start gap-10 overflow-y-scroll h-[30rem]">
        <section>
          <p className="font-bold">Kod Kraju:</p>
          <input
            onChange={(e) => {
              setAddress((c) => {
                return { ...c, kod_kraju: e.target.value };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>

        <section>
          <p className="font-bold">Województwo:</p>
          <input
            onChange={(e) => {
              setAddress((c) => {
                return { ...c, wojewodztwo: e.target.value };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>
        <section>
          <p className="font-bold">Kod Pocztowy:</p>
          <input
            onChange={(e) => {
              setAddress((c) => {
                return { ...c, kod_pocztowy: e.target.value };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>
        <section>
          <p className="font-bold">Ulica:</p>
          <input
            onChange={(e) => {
              setAddress((c) => {
                return { ...c, ulica: e.target.value };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>
        <section>
          <p className="font-bold">Numer domu:</p>
          <input
            onChange={(e) => {
              setAddress((c) => {
                return { ...c, number_domu: Number(e.target.value) };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>
        <section>
          <p className="font-bold">Numer lokalu:</p>
          <input
            onChange={(e) => {
              setAddress((c) => {
                return { ...c, number_lokalu: Number(e.target.value) };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>
        <section>
          <p className="font-bold">Powiat:</p>
          <input
            onChange={(e) => {
              setAddress((c) => {
                return { ...c, powiat: e.target.value };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>
      </article>
      <button
        onClick={addCountryHandler}
        className="bg-yellow px-5 py-2 text-black font-bold mt-3"
      >
        Dodaj
      </button>
    </>
  );
};

export default AddAddress;
