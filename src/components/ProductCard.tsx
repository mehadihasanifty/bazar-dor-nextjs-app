import { IProductCardProps } from "@/Types/types";
import Link from "next/link";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";

const toBengaliNumber = (value: number | string) => {
  const bengaliDigits = "০১২৩৪৫৬৭৮৯";
  return value
    .toString()
    .replace(/\d/g, (digit) => bengaliDigits[Number(digit)]);
};

const ProductCard = ({ item }: IProductCardProps) => {
  //   const isUp = item.change.dir === "up";

  return (
    <Link href={`/products/${item.id}`} className="block ">
      <div className="rounded-3xl border-2 border-[#dce5df] bg-[#fbfdfb] p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#05893E] hover:shadow-lg">
        <div className="flex items-center gap-4">
          <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-[#f0f5f1] text-4xl">
            {item.image}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#202822]">
              {item.nameBn}
            </h3>
            <p className="text-lg text-[#303b34]">প্রতি কেজি</p>
          </div>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-lg text-[#303b34]">আজকের দাম</p>
            <p className="text-2xl font-bold text-[#202822]">
              {toBengaliNumber(item.today)} টাকা
            </p>
          </div>
          <div
            className={`flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold sm:px-4 sm:py-2 sm:text-base lg:text-lg ${item.change.dir === "up" ? "bg-[#f1f5f1] text-red-500" : item.change.dir === "down" ? "bg-[#f1f5f1] text-green-500" : "bg-[#f1f5f1] text-gray-500"}`}
          >
            {item.change.dir === "up" && <IoCaretUpSharp />}
            {item.change.dir === "down" && <IoCaretDownSharp />}
            <span>{toBengaliNumber(item.change.pct.toFixed(1))}%</span>
          </div>

          {/* <div
            className={`flex items-center gap-1 rounded-full px-4 py-2 text-lg font-semibold ${isUp ? "bg-[#f1f5f1] text-red-500" : "bg-[#f1f5f1] text-green-500"}`}
          >
            {isUp ? <IoCaretUpSharp /> : <IoCaretDownSharp />}
            <span>{toBengaliNumber(item.change.pct)}%</span>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;