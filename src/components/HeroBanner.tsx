"use client";
import Image from "next/image";
import React from "react";
import heroimg from "@/assets/bazar-hero.png";
import Link from "next/link";

const HeroBanner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 py-6 bg-white px-6 rounded-2xl mt-6 mb-12">
      <div className="space-y-4 py-6 text-center lg:text-left">
        <div className="bg-green-200 inline text-[#05893E] p-2 rounded-2xl font-semibold ">
          {date}
        </div>
        <h1 className="mt-8 text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold">
          আজকের বাজারের দাম এক নজরে
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-10">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <Link href="#products">
          <button className="btn text-lg px-5 py-6 bg-[#05893E] border border-[#047F39] text-white rounded-xl shadow-lg shadow-[#047F39] hover:bg-[#047F39] ">
            সব পণ্য দেখুন
          </button>
        </Link>
      </div>
      <div>
        <Image
          src={heroimg}
          alt="Hero Banner"
          width={600}
          className="w-[300px] md:w-[400px] lg:w-[600px]"
        />
      </div>
    </div>
  );
};

export default HeroBanner;