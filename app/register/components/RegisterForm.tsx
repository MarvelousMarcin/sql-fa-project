"use client";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type User = {
  login: string;
  password: string;
  email: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const [registerData, setRegisterData] = useState({
    login: "",
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: (newUser: User) => {
      return axios.post("/api/createUser", newUser);
    },
    onError: (err: AxiosError<{ msg: string }>) => {
      const msg = err?.response?.data?.msg as string;
      toast.dismiss();
      toast.error(msg);
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    mutation.mutate(registerData);
  };

  return (
    <section className="w-1/4">
      <h1 className="text-center text-3xl mb-5">
        Stwórz swoje konto <br /> firmowe
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3 justify-center "
      >
        <div>
          <p className="mb-1">Login:</p>
          <input
            type="text"
            className="outline-none border-2 border-yellow rounded-lg py-2 px-2 w-full"
            onChange={(e) =>
              setRegisterData((registerData) => {
                return { ...registerData, login: e.target.value };
              })
            }
          />
        </div>
        <div>
          <p className="mb-1">Email:</p>
          <input
            type="text"
            className="outline-none border-2 border-yellow rounded-lg py-2 px-2 w-full"
            onChange={(e) =>
              setRegisterData((registerData) => {
                return { ...registerData, email: e.target.value };
              })
            }
          />
        </div>
        <div>
          <p className="mb-1">Hasło:</p>
          <input
            type="password"
            className="outline-none border-2 border-yellow rounded-lg py-2 px-2 w-full"
            onChange={(e) =>
              setRegisterData((registerData) => {
                return { ...registerData, password: e.target.value };
              })
            }
          />
        </div>

        <button className="bg-yellow text-black p-3 w-[11rem] mt-10 m-auto font-bold">
          Stwórz
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
