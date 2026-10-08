import { IDecreaseProductType } from "@/Types/types";
import React from "react";
import { IoCaretDownSharp } from "react-icons/io5";
import ProductCard from "./ProductCard";

const PriceFalling = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
  );
  const data = await res.json();
  const decreaseProducts = data.filter(
    (item: IDecreaseProductType) => item.change.dir === "down",
  );
  return (
    <div className="my-10">
      <h1 className="flex gap-2 items-center text-2xl font-bold">
        <IoCaretDownSharp className="text-green-500 " />
        আজ দাম কমেছে
      </h1>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {decreaseProducts.slice(-6).map((item: IDecreaseProductType) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PriceFalling;