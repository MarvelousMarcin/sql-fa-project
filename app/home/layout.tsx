"use client";
import { useUserContext } from "../components/ContextProvider";
import Logo from "../components/Logo";
import Nav from "./components/Nav";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { state, dispatch } = useUserContext();

  if (!state.auth) {
    return <div>Not authorized</div>;
  } else {
    return (
      <main>
        <header className="flex justify-between flex-row px-10 h-[11vh] items-center">
          <Logo />
          <Nav />
        </header>
        {children}
      </main>
    );
  }
};

export default HomeLayout;
