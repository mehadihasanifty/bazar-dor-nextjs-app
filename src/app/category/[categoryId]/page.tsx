import SelectOrderProduct from "@/components/SelectOrderProduct";

import Image from "next/image";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const data = await res.json();
  //   console.log(data);

  const category = data[0];
  const toBengaliNumber = (value: number | string) => {
    const bengaliDigits = "০১২৩৪৫৬৭৮৯";

    return value
      .toString()
      .replace(/\d/g, (digit) => bengaliDigits[Number(digit)]);
  };
  return (
    <div className="mt-6 space-y-6 mb-20">
      <div className="flex gap-4 items-center bg-white rounded-2xl p-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-xl  text-5xl">
          {category?.categoryIcon}
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {category?.categoryNameBn}
          </h1>
          <p className="text-gray-500">
            {" "}
            {toBengaliNumber(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন{" "}
          </p>
        </div>
      </div>
      <SelectOrderProduct products={data} />
    </div>
  );
};

export default CategoryPage;