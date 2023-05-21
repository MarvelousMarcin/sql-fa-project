"use client";
import * as React from "react";
import Image from "next/image";
import plus from "../../../assets/plus.svg";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import AddCountry from "./AddCountry";
import SelectKraj from "./SelectCountry";
import TextField from "@mui/material/TextField";

const CountryNav = ({ setFilter, data }) => {
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
          <AddCountry setShowBox={setShowBox} />
        </motion.section>
      )}
      <section className="flex justify-center items-center">
        <a id="downloadData" style={{ display: "none" }}></a>

        <button
          onClick={() => {
            const doc = document.implementation.createDocument("", "", null);
            const productsElem = doc.createElement("countries");
            console.log(data);
            data.forEach((country) => {
              var productElem1 = doc.createElement("country");
              productElem1.setAttribute("id", country.id);
              productElem1.setAttribute("kraj", country.kraj);
              productElem1.setAttribute("kod_kraju", country.kod_kraju);
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
            downloadData?.setAttribute("download", "countries.xml");
            downloadData?.click();
          }}
        >
          Export
        </button>
        <SelectKraj setFilter={setFilter} />
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          onChange={(e) =>
            setFilter((prev) => {
              return { ...prev, value: e.target.value };
            })
          }
        />
      </section>
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

export default CountryNav;
