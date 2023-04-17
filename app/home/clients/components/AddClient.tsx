"use client";

import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type ClientType = {
  nip: string;
  nazwa: string;
  id_adresu: number;
};

const AddClient = ({ setShowBox }: { setShowBox: Function }) => {
  const [client, setClient] = useState({
    nip: "0",
    nazwa: "",
    id_adresu: 0,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newClient: ClientType) => {
      return axios.post("/api/createClient", newClient);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      setShowBox(false);
    },
  });

  const addCountryHandler = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(client);
  };

  return (
    <>
      <h1 className="font-bold text-2xl mb-10">Dodaj kraj</h1>
      <article className="flex flex-col justify-start gap-10 overflow-y-scroll h-[30rem]">
        <section>
          <p className="font-bold">NIP:</p>
          <input
            onChange={(e) => {
              setClient((c) => {
                return { ...c, nip: e.target.value };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>

        <section>
          <p className="font-bold">Nazwa:</p>
          <input
            onChange={(e) => {
              setClient((c) => {
                return { ...c, nazwa: e.target.value };
              });
            }}
            className="outline-none border-2 border-black rounded-md px-2 py-1 w-full"
          />
        </section>
        <section>
          <p className="font-bold">ID Adresu:</p>
          <input
            onChange={(e) => {
              setClient((c) => {
                return { ...c, id_adresu: Number(e.target.value) };
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

export default AddClient;
