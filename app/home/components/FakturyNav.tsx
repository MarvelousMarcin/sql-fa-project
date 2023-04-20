"use client";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import AddClient from "../clients/components/AddClient";
const FakturyNav = () => {
  const [showBox, setShowBox] = useState(false);

  return (
    <nav className="flex flex-row gap-3">
      <button className="bg-yellow text-black font-xl font-bold p-2 px-3">
        Generuj XML
      </button>
    </nav>
  );
};

export default FakturyNav;
