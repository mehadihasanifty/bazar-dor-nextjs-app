"use client";
import Image from "next/image";
import React from "react";
// import toast from "react-hot-toast";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";
import Navlinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  //   const handleClick = () => {
  //     toast(`todays date is ${date}`);
  //   };
  return (
    <header className="lg:px-6">
      {/* <button onClick={handleClick} className="btn">
        click
      </button> */}
      <div className="flex justify-between items-center py-4">
        <Link href="/" className="flex gap-2">
          <div className="bg-[#05893E] p-4 rounded-2xl ">
            <Image src={logo} alt="Logo icons" width={30} height={30} />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-1">বাজার দর</h2>
            <p>{date}</p>
          </div>
        </Link>
        <div className="flex gap-2">
          <button className="btn text-lg px-5 py-6 rounded-xl border-[#047F39] hover:bg-[#05893E] hover:text-white transition-all">
            সাইন ইন
          </button>
          <button className="btn text-lg px-5 py-6 bg-[#05893E] border border-[#047F39] text-white rounded-xl shadow-lg shadow-[#047F39] hover:bg-[#047F39]">
            সাইন আপ
          </button>
        </div>
      </div>
      <Navlinks />
    </header>
  );
};

export default Header;