import React from "react";
import ProductCard from "./ProductCard";
import { IAllProductType } from "@/Types/types";

const AllProducts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  //   const res = await fetch(
  //     "https://api.api-store.workers.dev/api/bazardor/products",
  //   );
  const data = await res.json();
  //   console.log(data);
  return (
    <div className="mt-6 mb-18" id = "all-products">
      <div>
        <h1 className="font-bold text-3xl mb-3">সকল পণ্য</h1>
        <p className="text-lg text-gray-600">
          মোট {data.length}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item: IAllProductType) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;