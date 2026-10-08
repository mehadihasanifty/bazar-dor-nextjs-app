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
          "https://api.api-store.workers.dev/api/bazardor/categories",
        );

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
    <div className="flex gap-2">
      {data.map((links: INavlinksType) => (
        <Link
          href={`/category/${links.slug}`}
          key={links.id}
          className={`flex gap-1 rounded-lg px-2 py-1 ${pathname === `/category/${links.slug}` ? "bg-[#05893E] text-white" : "hover:bg-base-300"}`}
        >
          <p>{links.icon}</p>
          <p>{links.nameBn}</p>
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;