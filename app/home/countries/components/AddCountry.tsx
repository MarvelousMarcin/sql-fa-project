"use client";

import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

type CountryType = {
  country: string;
  countryCode: string;
};

const AddCountry = ({ setShowBox }: { setShowBox: Function }) => {
  const [country, setCountry] = useState({ country: "", countryCode: "" });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newCountry: CountryType) => {
      return axios.post("/api/createCountry", newCountry);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["countries"] });
      setShowBox(false);
    },
  });

  const addCountryHandler = (e: FormEvent) => {
    e.preventDefault();
    if (country.countryCode.length !== 3) {
      toast.error("Kod kraju musi mieć 3 cyfry");
    }
    mutation.mutate(country);
  };

  return (
    <>
      <h1 className="font-bold text-2xl mb-10">Dodaj kraj</h1>
      <article className="flex flex-col justify-evenly gap-10">
        <section>
          <p className="font-bold">Kraj:</p>
          <input
            onChange={(e) => {
              setCountry((c) => {
                return { ...c, country: e.target.value };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>
        <section>
          <p className="font-bold">Kod kraju:</p>
          <input
            onChange={(e) => {
              setCountry((c) => {
                return { ...c, countryCode: e.target.value };
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

export default AddCountry;
