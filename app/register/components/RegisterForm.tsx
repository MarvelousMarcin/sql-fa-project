const RegisterForm = () => {
  return (
    <section className="w-1/4">
      <h1 className="text-center text-3xl mb-5">
        Stwórz swoje konto <br /> firmowe
      </h1>
      <form className="flex flex-col gap-3 justify-center ">
        <div>
          <p className="mb-1">Login:</p>
          <input
            type="text"
            className="outline-none border-2 border-yellow rounded-lg py-2 px-2 w-full"
          />
        </div>
        <div>
          <p className="mb-1">Email:</p>
          <input
            type="text"
            className="outline-none border-2 border-yellow rounded-lg py-2 px-2 w-full"
          />
        </div>
        <div>
          <p className="mb-1">Hasło:</p>
          <input
            type="password"
            className="outline-none border-2 border-yellow rounded-lg py-2 px-2 w-full"
          />
        </div>

        <button className="bg-yellow text-black p-3 w-[11rem] mt-10 m-auto">
          Stwórz
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
