"use client";
import Link from "next/link";

const AlreadyHasAccount = () => {
  return (
    <h1>
      Masz już konto?{" "}
      <Link href="/">
        <span className="text-yellow font-bold">Zaloguj się</span>
      </Link>
    </h1>
  );
};

export default AlreadyHasAccount;
