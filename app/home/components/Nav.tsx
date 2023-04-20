"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { delete_cookie } from "../func/cookies";

const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex flex-row justify-evenly gap-12">
        <li>
          <Link href="/home">Faktury</Link>
        </li>
        <li>
          <Link href="/home/products">Products</Link>
        </li>
        <li>
          <Link href="/home/clients">Klienci</Link>
        </li>
        <li>
          <Link href="/home/countries">Kraje</Link>
        </li>
        <li>
          <Link href="/home/address">Adresy</Link>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            delete_cookie("token");
            router.push("/");
          }}
        >
          Wyjdź
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
