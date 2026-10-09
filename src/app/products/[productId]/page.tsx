import { IWholeProductType } from "@/Types/types";
import Link from "next/link";
import React from "react";
import { IoCaretUpSharp, IoChevronForward } from "react-icons/io5";
import { translateUnit } from "@/utils/translateUnit";
// import ProductCard from "../../../components/ProductCard";
import ProductMarketSummary from "@/components/ProductSummary";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${productId}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const product: IWholeProductType = await res.json();
  // console.log(product);

  const toBengaliNumber = (value: number | string) => {
    const bengaliDigits = "০১২৩৪৫৬৭৮৯";

    return value
      .toString()
      .replace(/\d/g, (digit) => bengaliDigits[Number(digit)]);
  };
  const result = Math.abs(product.yesterday - product.today);

  //   console.log(result);

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 text-lg text-[#757979] mb-8">
        <Link href="/" className="hover:text-[#05893E]">
          হোম
        </Link>
        <IoChevronForward className="text-sm" />
        <Link
          href={`/category/${product.category}`}
          className="hover:text-[#05893E] hover:underline"
        >
          {product.categoryNameBn}
        </Link>
        <IoChevronForward className="text-sm" />
        <span>{product.nameBn}</span>
      </div>
      {/* ----- div --- or card ---------------------*/}
      <div className="flex flex-col gap-4 lg:flex-row items-center justify-between rounded-3xl border border-[#dce5df] bg-white p-6 shadow-sm mb-8">
        <div className="flex flex-col text-center md:text-left md:flex-row items-center gap-5">
          <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-[#f0f5f1] text-6xl">
            {product.image}
          </div>

          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-[#202822]">
              {product.nameBn}
            </h1>

            <p className="mt-1 text-lg text-[#6b716d]">
              প্রতি {translateUnit(product.unit)} · {product.categoryNameBn}
            </p>

            <p className="mt-4 text-lg text-[#303833] ">
              গতকালের তুলনায় আজ দাম {}
              <span className="font-semibold text-[#202822]">
                {product.yesterday > product.today ? (
                  <span>কমেছে</span>
                ) : product.yesterday < product.today ? (
                  <span>বেড়েছে</span>
                ) : (
                  <span>অপরিবর্তিত রয়েছে</span>
                )}
              </span>{" "}
              ·{" "}
              <span className="text-green-600 ">{toBengaliNumber(result)}</span>{" "}
              টাকা
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-[#f0f5f1] px-10 py-8 lg:px-8 lg:py-6 text-center space-y-2">
          <p className="text-lg text-[#6b716d]">আজকের দাম</p>

          <p className="text-5xl font-bold text-[#202822]">
            {toBengaliNumber(product.today)}
          </p>

          <p className="text-lg text-[#6b716d]">
            টাকা / {translateUnit(product.unit)}
          </p>

          <div className="mt-2 font-semibold text-red-500 flex justify-center items-center text-xl gap-2">
            <IoCaretUpSharp />
            <p>{toBengaliNumber(product.change.pct.toFixed(1))}%</p>
          </div>
        </div>
      </div>
      {/* ----- div --- or card finish---------------------*/}
      <div className="mb-20">
        <ProductMarketSummary product={product} />
      </div>
    </div>
  );
};

export default ProductDetailPage;