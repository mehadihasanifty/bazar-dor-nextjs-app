import { IIncreaseProductType } from "@/Types/types";
import Image from "next/image";
import React from "react";
import { IoCaretUpSharp } from "react-icons/io5";
import ProductCard from "./ProductCard";

const PriceRising = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  // const res = await fetch(
  //   "https://api.api-store.workers.dev/api/bazardor/products",
  // );
  const data = await res.json();
  const increaseProducts = data.filter(
    (item: IIncreaseProductType) => item.change.dir === "up",
  );

  //   console.log(data);

  //   const toBengaliNumber = (value: number | string) => {
  //     const bengaliDigits = "০১২৩৪৫৬৭৮৯";
  //     return value
  //       .toString()
  //       .replace(/\d/g, (digit) => bengaliDigits[Number(digit)]);
  //   };

  return (
    <div className="my-10">
      <h1 className="flex gap-2 items-center text-2xl font-bold mb-3">
        <IoCaretUpSharp className="text-red-500 " />
        আজ দাম বেড়েছে
      </h1>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {increaseProducts.slice(0, 6).map((item: IIncreaseProductType) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PriceRising;