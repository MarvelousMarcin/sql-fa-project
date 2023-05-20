"use client";

import Image from "next/image";
import plus from "../../../assets/plus.svg";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import AddProduct from "./AddProduct";

type ProductNavType = {
  setDeleting: (param: ({}) => {}) => void;
};

const ProductsNav = ({ setDeleting, deleting }: ProductNavType) => {
  const [showBox, setShowBox] = useState(false);

  const addingCountryHandler = (e: FormEvent) => {
    e.preventDefault();
    setShowBox(true);
  };

  return (
    <nav className="flex flex-row gap-3">
      {showBox && (
        <div
          onClick={() => setShowBox(false)}
          className="fixed top-0 left-0 bg-black opacity-70 w-screen h-screen z-20"
        ></div>
      )}
      {showBox && (
        <motion.section
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-8 fixed top-1/2 left-1/2 rounded-md translate-x-[-50%] translate-y-[-50%] w-[30rem] h-[40rem] z-50"
        >
          <AddProduct setShowBox={setShowBox} />
        </motion.section>
      )}
      <section className="flex items-center justify-center gap-3">
        <div
          style={{ color: deleting ? "red" : "black" }}
          className="cursor-pointer"
          onClick={() =>
            setDeleting((prev) => {
              return !prev;
            })
          }
        >
          Delete
        </div>
        <Image
          onClick={addingCountryHandler}
          className="cursor-pointer"
          alt=""
          src={plus}
          width={25}
          height={25}
        />
      </section>
    </nav>
  );
};

export default ProductsNav;
