"use client";

import { INavlinksType } from "@/Types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const [data, setData] = useState<INavlinksType[]>([]);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          "https://api.abcz.workers.dev/api/bazardor/categories",
        );
        // const res = await fetch(
        //   "https://api.api-store.workers.dev/api/bazardor/categories",
        // );

        const result = await res.json();

        setData(result);
      } catch (error) {
        console.error("Failed to fetch nav links:", error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative">
      <div className="flex gap-1 overflow-x-auto py-2 scrollbar-none sm:gap-2 ">
        {data.map((links: INavlinksType) => (
          <Link
            href={`/category/${links.slug}`}
            key={links.id}
            className={`flex shrink-0 items-center gap-1 rounded-lg px-2  py-1.5 text-sm transition-colors sm:px-3 sm:text-base ${pathname === `/category/${links.slug}` ? "bg-[#05893E] text-white" : "hover:bg-base-300"}`}
          >
            <p>{links.icon}</p>
            <p>{links.nameBn}</p>
          </Link>
        ))}
      </div>

      <div className="pointer-events-none absolute left-0 top-0 flex h-full items-center bg-gradient-to-r from-white via-white/80 to-transparent pr-6 sm:hidden">
        <span className="text-xl text-[#05893E]">←</span>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 flex h-full items-center bg-gradient-to-l from-white via-white/80 to-transparent pl-6 sm:hidden">
        <span className="text-xl text-[#05893E]">→</span>
      </div>
    </div>
  );
};

export default Navlinks;