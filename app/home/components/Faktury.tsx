const Faktury = () => {
  return (
    <main className="w-[90%]">
      <form className="flex flex-col gap-11 justify-evenly ">
        <article className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Produkty</h1>
          <section>
            <p className="text-xl font-bold">Produkt 1</p>
            <h2>Nazwa</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Cena brutto</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Cena netto</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Ilość</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
          </section>
          <section>
            <p className="text-xl font-bold">Produkt 2</p>
            <h2>Nazwa</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Cena brutto</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Cena netto</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Ilość</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
          </section>{" "}
          <section>
            <p className="text-xl font-bold">Produkt 3</p>
            <h2>Nazwa</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Cena brutto</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Cena netto</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Ilość</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
          </section>{" "}
          <section>
            <p className="text-xl font-bold">Produkt 4</p>
            <h2>Nazwa</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Cena brutto</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Cena netto</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
            <h2>Ilość</h2>
            <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-full" />
          </section>
        </article>
      </form>
    </main>
  );
};

export default Faktury;
