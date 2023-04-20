const Faktury = () => {
  return (
    <main className="w-[90%]">
      <form className="flex flex-col gap-11 justify-evenly ">
        <article className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Klient</h1>
          <p>Id Klienta</p>
          <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-[15rem]" />
          <h1 className="font-bold text-2xl">Podmiot</h1>
          <p>NIP</p>
          <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-[15rem]" />
          <p>Id Adresu</p>
          <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-[15rem]" />

          <h1 className="font-bold text-2xl">Produkty</h1>
          <section className="flex flex-row gap-10">
            <article>
              <p>Id produktu</p>
              <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-[15rem]" />
              <p>Ilość</p>
              <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-[15rem]" />
            </article>
            <article>
              <p>Id produktu</p>
              <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-[15rem]" />
              <p>Ilość</p>
              <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-[15rem]" />
            </article>
            <article>
              <p>Id produktu</p>
              <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-[15rem]" />
              <p>Ilość</p>
              <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-[15rem]" />
            </article>
            <article>
              <p>Id produktu</p>
              <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-[15rem]" />
              <p>Ilość</p>
              <input className="outline-none border-2 border-black rounded-md px-2 py-1 w-[15rem]" />
            </article>
          </section>
        </article>
      </form>
    </main>
  );
};

export default Faktury;
