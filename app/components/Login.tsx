"use client";

const Login = () => {
  return (
    <section className="flex flex-row">
      <div className="flex justify-center items-center gap-2 w-2/5">
        <p>Login:</p>
        <input
          type="text"
          className="outline-none border-2 border-black rounded-lg px-2 py-1 w-1/2"
        />
      </div>
      <div className="flex justify-center items-center gap-2 w-2/5">
        <p>Hasło:</p>
        <input
          type="password"
          className="outline-none border-2 border-black rounded-lg px-2 py-1 w-1/2"
        />
      </div>
      <button className="bg-yellow px-3 rounded-md font-bold">Login</button>
    </section>
  );
};

export default Login;
