import AllProducts from "@/components/AllProducts";
import HeroBanner from "@/components/HeroBanner";
import PriceRising from "@/components/PriceRising";
import PriceFalling from "@/components/PriceRising";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6">
      <HeroBanner />
      <PriceRising />
      <PriceFalling />
      <AllProducts />
    </div>
  );
}
