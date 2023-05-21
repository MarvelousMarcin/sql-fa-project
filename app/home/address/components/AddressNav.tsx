"use client";

import Image from "next/image";
import plus from "../../../assets/plus.svg";
import trash from "../../../assets/trash.svg";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import AddAddress from "./AddAddress";
const AddressNav = ({ data }) => {
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
          <AddAddress setShowBox={setShowBox} />
        </motion.section>
      )}
      <a id="downloadData" style={{ display: "none" }}></a>
      <button
        onClick={() => {
          const doc = document.implementation.createDocument("", "", null);
          const productsElem = doc.createElement("products");
          console.log(data);
          data.forEach((address) => {
            var productElem1 = doc.createElement("product");

            var productElem1Id = doc.createElement("id");
            productElem1Id.innerHTML = address.id;
            productElem1.appendChild(productElem1Id);

            var productElem1IDKraju = doc.createElement("id_kraju");
            productElem1IDKraju.innerHTML = address.id_kraju;
            productElem1.appendChild(productElem1IDKraju);

            var productElem1IDKod = doc.createElement("kod_pocztowy");
            productElem1IDKod.innerHTML = address.kod_pocztowy;
            productElem1.appendChild(productElem1IDKod);

            var productElem1IDPowiat = doc.createElement("powiat");
            productElem1IDPowiat.innerHTML = address.powiat;
            productElem1.appendChild(productElem1IDPowiat);

            var productElem1IDUlica = doc.createElement("ulica");
            productElem1IDUlica.innerHTML = address.ulica;
            productElem1.appendChild(productElem1IDUlica);

            var productElem1Wojew = doc.createElement("wojewodztwo");
            productElem1Wojew.innerHTML = address.wojewodztwo;
            productElem1.appendChild(productElem1Wojew);

            var productElem1Numer_Dom = doc.createElement("number_domu");
            productElem1Numer_Dom.innerHTML = address.number_domu;
            productElem1.appendChild(productElem1Numer_Dom);

            var productElem1Numer_Lok = doc.createElement("number_lokalu");
            productElem1Numer_Lok.innerHTML = address.number_lokalu;
            productElem1.appendChild(productElem1Numer_Lok);

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
          downloadData?.setAttribute("download", "addresses.xml");
          downloadData?.click();
        }}
      >
        Export
      </button>
      <Image
        onClick={addingCountryHandler}
        className="cursor-pointer"
        alt=""
        src={plus}
        width={25}
        height={25}
      />
    </nav>
  );
};

export default AddressNav;
