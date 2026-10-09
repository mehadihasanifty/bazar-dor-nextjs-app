"use client";
import { IAllProductType, IWholeProductType } from "@/Types/types";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const SelectOrderProduct = ({
  products,
}: {
  products: IWholeProductType[];
}) => {
  const [sortBy, setSortBy] = useState<
    "ডিফল্ট" | "দাম : কম থেকে বেশি" | "দাম : বেশি থেকে কম"
  >("ডিফল্ট");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "দাম : কম থেকে বেশি") {
      return a.today - b.today;
    }

    if (sortBy === "দাম : বেশি থেকে কম") {
      return b.today - a.today;
    }

    return 0;
  });
  const toBengaliNumber = (value: number | string) => {
    const bengaliDigits = "০১২৩৪৫৬৭৮৯";

    return value
      .toString()
      .replace(/\d/g, (digit) => bengaliDigits[Number(digit)]);
  };

  return (
    <div className="mb-11">
      <div className="bg-white rounded-2xl p-4 flex items-center justify-end gap-3">
        <p className="text-gray-500">সাজান</p>
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value as
                | "ডিফল্ট"
                | "দাম : কম থেকে বেশি"
                | "দাম : বেশি থেকে কম",
            )
          }
          className="select select-md w-[180px] flex justify-center items-center"
        >
          <option value="ডিফল্ট">ডিফল্ট</option>
          <option value="দাম : কম থেকে বেশি">দাম : কম থেকে বেশি</option>
          <option value="দাম : বেশি থেকে কম">দাম : বেশি থেকে কম</option>
        </select>
      </div>

      <div className="mt-6 mb-11">
        <h1 className="text-[#4c514d]">
          মোট {toBengaliNumber(products.length)}টি পণ্য দেখানো হচ্ছে
        </h1>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((item: IWholeProductType) => (
            <ProductCard
              key={item.id}
              item={{ ...item, id: String(item.id) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectOrderProduct;