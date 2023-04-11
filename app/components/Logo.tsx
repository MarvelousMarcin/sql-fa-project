import Image from "next/image";

import coin from "../assets/coins.svg";

const Logo = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <h1 className="text-xl">JPK FA</h1>
      <Image alt="" height={45} width={45} src={coin} />
    </div>
  );
};

export default Logo;
