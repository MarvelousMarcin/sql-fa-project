import Logo from "../components/Logo";
import AlreadyHasAccount from "./components/AlreadyHasAccount";
import RegisterForm from "./components/RegisterForm";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <header className="flex justify-between flex-row px-10 h-[11vh] items-center">
        <Logo />
        <AlreadyHasAccount />
      </header>
      <main className="flex justify-center items-center w-screen h-[70vh]">
        <RegisterForm />
      </main>
    </main>
  );
}
