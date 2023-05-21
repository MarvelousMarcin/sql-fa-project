"use client";

import Image from "next/image";
import plus from "../../../assets/plus.svg";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import AddProduct from "./AddProduct";

type ProductNavType = {
  setDeleting: (param: ({}) => {}) => void;
};

const ProductsNav = ({ setDeleting, deleting, data }: ProductNavType) => {
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
      <section className="flex items-center justify-center gap-6">
        <a id="downloadData" style={{ display: "none" }}></a>
        <button
          onClick={() => {
            const doc = document.implementation.createDocument("", "", null);
            const productsElem = doc.createElement("products");
            console.log(data);
            data.forEach((product) => {
              var productElem1 = doc.createElement("product");
              productElem1.setAttribute("id", product.id);
              productElem1.setAttribute("name", product.nazwa);
              productElem1.setAttribute("netto", product.netto);
              productElem1.setAttribute("brutto", product.brutto);
              productElem1.setAttribute("createdAt", product.createdAt);
              productsElem.appendChild(productElem1);
            });
            doc.appendChild(productsElem);

            var serializer = new XMLSerializer();
            var docString = serializer.serializeToString(doc);
            console.log(docString);
            const content = `<?xml version="1.0" encoding="utf-8"?><!DOCTYPE root>
    ${docString}
    `;
            let downloadData = document.getElementById("downloadData");
            downloadData?.setAttribute(
              "href",
              "data:text/application/xml;charset=utf-8," +
                encodeURIComponent(content)
            );
            downloadData?.setAttribute("download", "products.xml");
            downloadData?.click();
          }}
        >
          Export
        </button>
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
