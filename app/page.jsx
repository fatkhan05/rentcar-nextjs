import Image from "next/image";
import Navbar from "./components/Navbar";
import BgHero from "@/assets/image/bghero.png"
import CarHero from "@/assets/image/car.png"

export default function Home() {
  return (
    <div className="relative">
      <section className="relative">
        <Navbar className="absolute z-10"/>
        <Image
          src={BgHero}
          className="w-[700px] absolute right-0 opacity-20 -z-10"
        />
        <div className="flex">
          <div className="z-0">
            Find, book and rent
          </div>
          <div>
            <Image
              src={CarHero}
              className="w-[700px] absolute right-0 top-1/2 transform -translate-x-1/2 z-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
