import Logo from "../components/Logo";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <header className="flex justify-between flex-row px-10 h-[11vh] items-center">
        <Logo />
      </header>
    </main>
  );
}
