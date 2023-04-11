"use client";

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useUserContext } from "./ContextProvider";
import { ActionKind } from "./ContextProvider";
type UserCredType = {
  login: string;
  password: string;
};

const Login = () => {
  const [userCredit, setUserCredit] = useState({ login: "", password: "" });
  const router = useRouter();
  const { dispatch } = useUserContext();

  const mutation = useMutation({
    mutationFn: (user: UserCredType) => {
      return axios.post("/api/login", user);
    },
    onError: (err: AxiosError<{ msg: string }>) => {
      const msg = err?.response?.data?.msg as string;
      toast.dismiss();
      toast.error(msg);
    },
    onSuccess: (data) => {
      console.log(data);
      const token = data.data.token;
      document.cookie = `token=${token}`;
      dispatch({ type: ActionKind.setToken, payload: token });
      dispatch({ type: ActionKind.setAuth, payload: true });
      router.push("/home");
    },
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(userCredit);
  };

  return (
    <section className="flex flex-row">
      <div className="flex justify-center items-center gap-2 w-2/5">
        <p>Login:</p>
        <input
          type="text"
          className="outline-none border-2 border-black rounded-lg px-2 py-1 w-1/2"
          onChange={(e) =>
            setUserCredit((userCredit) => {
              return { ...userCredit, login: e.target.value };
            })
          }
        />
      </div>
      <div className="flex justify-left items-center gap-2 w-2/5">
        <p>Hasło:</p>
        <input
          type="password"
          className="outline-none border-2 border-black rounded-lg px-2 py-1 w-1/2"
          onChange={(e) =>
            setUserCredit((userCredit) => {
              return { ...userCredit, password: e.target.value };
            })
          }
        />
      </div>
      <button
        onClick={submitHandler}
        className="bg-yellow px-5 rounded-md font-bold"
      >
        Login
      </button>
    </section>
  );
};

export default Login;
