import { IMarketsType, IWholeProductType } from "@/Types/types";
import { translateUnit } from "@/utils/translateUnit";

interface ProductMarketSummaryProps {
  product: IWholeProductType;
}

const toBengaliNumber = (value: number | string) => {
  const digits = "০১২৩৪৫৬৭৮৯";
  return value.toString().replace(/\d/g, (digit) => digits[Number(digit)]);
};

const formatPrice = (price: number) => {
  const formatted = Number.isInteger(price)
    ? price.toString()
    : price.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  return `${toBengaliNumber(formatted)} টাকা`;
};

// const translateUnit = (unit: string) => {
//   const units: Record<string, string> = {
//     kg: "কেজি",
//     gram: "গ্রাম",
//     liter: "লিটার",
//     piece: "টি",
//     dozen: "ডজন",
//   };

//   return units[unit.toLowerCase()] ?? unit;
// };

const ProductMarketSummary = ({ product }: ProductMarketSummaryProps) => {
  const { markets, unit } = product;
  console.log(markets);

  const marketAverages = markets.map(
    (market: IMarketsType) => (market.min + market.max) / 2,
  );
  // console.log(marketAverages);

  const minPrice = markets.length
    ? Math.min(...markets.map((market: IMarketsType) => market.min))
    : 0;
  const maxPrice = markets.length
    ? Math.max(...markets.map((market: IMarketsType) => market.max))
    : 0;
  // const averagePrice = marketAverages.length
  //   ? marketAverages.reduce((total, price) => total + price, 0) /
  //     marketAverages.length
  //   : 0;

  const averagePrice = markets.length > 0 ? (minPrice + maxPrice) / 2 : 0;

  const summaryCards = [
    {
      title: "সর্বনিম্ন দাম",
      price: minPrice,
      description: "সবচেয়ে কম দামের বাজার",
      color: "text-green-600",
    },
    {
      title: "সর্বোচ্চ দাম",
      price: maxPrice,
      description: "সবচেয়ে বেশি দামের বাজার",
      color: "text-red-500",
    },
    {
      title: "গড় দাম",
      price: averagePrice,
      description: `প্রতি ${translateUnit(unit)}-এর হিসাবে`,
      color: "text-green-600",
    },
  ];
  const sortedMarkets = [...(markets as IMarketsType[])].sort(
    (a, b) => a.min - b.min,
  );

  return (
    <section className="rounded-2xl border border-[#dce5df] bg-white p-4 sm:p-5 lg:p-5">
      <h2 className="text-lg font-bold text-[#202822]">দামের সারসংক্ষেপ</h2>

      <div className="mt-3 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-3">
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-[#dce5df] bg-[#fbfdfb] p-4"
          >
            <p className="text-sm text-[#68716b]">{card.title}</p>
            <p className={`mt-1 text-2xl font-bold ${card.color}`}>
              {toBengaliNumber(Number(card.price.toFixed(2)))}{" "}
              <span className="text-sm font-normal">টাকা</span>
            </p>
            <p className="mt-1 text-xs text-[#68716b]">{card.description}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-6 text-lg font-bold text-[#202822]">
        বাজারভিত্তিক আজকের দাম
      </h2>

      <div className="mt-3 overflow-x-auto rounded-2xl border border-[#dce5df]">
        <table className="w-full min-w-[650px] border-collapse text-sm sm:min-w-[650px] sm:text-sm">
          <thead className="bg-[#fbfdfb] text-left text-[#68716b]">
            <tr>
              <th className="px-4 py-3 font-semibold">বাজার</th>
              <th className="px-4 py-3 font-semibold">বিভাগ</th>
              <th className="px-4 py-3 text-right font-semibold">সর্বনিম্ন</th>
              <th className="px-4 py-3 text-right font-semibold">সর্বোচ্চ</th>
              <th className="px-4 py-3 text-right font-semibold">গড়</th>
            </tr>
          </thead>
          <tbody>
            {sortedMarkets.map((market: IMarketsType) => {
              const marketAverage = (market.min + market.max) / 2;

              return (
                <tr
                  key={`${market.market}-${market.division}`}
                  className="border-t border-[#dce5df] odd:bg-white even:bg-[#f0f5f1]"
                >
                  <td className="px-4 py-3 font-medium text-[#202822]">
                    {market.market}
                  </td>
                  <td className="px-4 py-3 text-[#303833]">
                    {market.division}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {formatPrice(market.min)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {formatPrice(market.max)}
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-[#202822]">
                    {formatPrice(marketAverage)}
                  </td>
                </tr>
              );
            })}
            {markets.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-[#68716b]"
                >
                  কোনো বাজারের তথ্য পাওয়া যায়নি।
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductMarketSummary;