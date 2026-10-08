import { IMarqueeProductType } from "@/Types/types";
import Link from "next/link";
import React from "react";
import { IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5";
import MarqueeText from "react-marquee-text";

const Marquee = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
  );
  const data = await res.json();
  console.log(data);

  const toBengaliNumber = (value: number | string) => {
    const bengaliDigits = "০১২৩৪৫৬৭৮৯";

    return value
      .toString()
      .replace(/\d/g, (digit) => bengaliDigits[Number(digit)]);
  };

  return (
    <div>
      <div className="w-full py-2">
        <MarqueeText pauseOnHover direction="right">
          {data.map((item: IMarqueeProductType) => (
            <Link
              href={`/product/${item.id}`}
              key={item.id}
              className="flex gap-4 items-center px-4 py-2 border-r border-gray-300 hover:bg-gray-100 transition-all"
            >
              <p>{item.image}</p>
              <p>{item.nameBn}</p>
              <p>{`${toBengaliNumber(item.today)} টাকা/কেজি`}</p>
              
                {item.change.dir === "up" ? (
                  <div className="flex gap-1 items-center text-red-500">
                    <IoCaretUpSharp />
                    <p>{toBengaliNumber(item.change.pct)} %</p>
                  </div>
                ) : (
                  <div className="flex gap-1 items-center text-green-500">
                    <IoCaretDownSharp />
                    <p>{toBengaliNumber(item.change.pct)} %</p>
                  </div>
                )}
              
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;