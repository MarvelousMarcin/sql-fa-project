"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { delete_cookie } from "../func/cookies";
const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex flex-row justify-evenly gap-4">
        <li>
          <Link href="/home">Faktury</Link>
        </li>
        <li>
          <Link href="/home/fa">Podmioty</Link>
        </li>
        <li>
          <Link href="/home/fa">Klienci</Link>
        </li>
        <li>
          <Link href="/home/countries">Kraje</Link>
        </li>
        <li>
          <Link href="/home/address">Adresy</Link>
        </li>
        <li
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
