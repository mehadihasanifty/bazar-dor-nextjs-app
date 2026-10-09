import Image from "next/image";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";
import Navlinks from "./NavLinks";
import UserAuthBtn from "./UserAuthBtn";
// import BanglaDate from "./BanglaDate";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="px-4 sm:px-5 lg:px-6 bg-base-300 ">
      <div className="flex justify-between items-center py-4">
        <div className="flex  gap-2 min-w-0 items-center sm:gap-3">
          <Link
            href="/"
            className="shrink-0 rounded-xl bg-[#05893E] p-3 sm:p-4 sm:rounded-2xl sm:block hidden"
          >
            <Image src={logo} alt="Logo icons" width={30} height={30} />
          </Link>
          <div className="min-w-0 ">
            <Link href="/">
              <h2 className="mb-0.5 truncate text-xl sm:text-3xl font-bold ">
                বাজার দর
              </h2>
            </Link>
            <p className="truncate text-sm sm:text-base">
              {/* <BanglaDate /> */}
              {date}
            </p>
          </div>
        </div>
        {/* <p className="truncate text-sm sm:text-base">{date}</p> */}

        <UserAuthBtn />
      </div>
      <Navlinks />
    </header>
  );
};

export default Header;