import Image from "next/image";
import Navbar from "./components/Navbar";
import BgHero from "@/assets/image/bghero.png"
import HeroSection from "./components/HeroSection";
import SearchBox from "./components/SearchBox";
import LocationTrick from "@/assets/image/location-tick.png"
import Calendar from "@/assets/image/calendar2.png"
import Car1 from "@/assets/image/car1.png"
import Honda from "@/assets/image/honda.png"
import Jaguar from "@/assets/image/jaguar.png"
import Nissan from "@/assets/image/nissan.png"
import Volvo from "@/assets/image/volvo.png"
import Acura from "@/assets/image/acura.png"
import Ring from "@/assets/image/ring.png"
import Vector from "@/assets/image/vector2.png"
import Car2 from "@/assets/image/mobil2.png"
import Wallet from "@/assets/image/wallet.png"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="relative">
        <Image
          src={BgHero}
          className="w-[600px] absolute right-0 opacity-20 -z-999"
        />
        <HeroSection/>
        <SearchBox/>
        <div className="py-32 flex flex-col items-center">
          <div className="h-10 w-44 bg-[#1572D3]/10 rounded-lg flex items-center justify-center ">
            <p className="text-[#1572D3] font-medium">HOW IT WORK</p>
          </div>
          <div className="flex items-center mt-6">
            <h1 className="text-4xl font-medium">Rent with following 3 working steps</h1>
          </div>
          <div className="flex gap-20 mt-20 px-30">
            <div className="flex flex-col items-center w-full">
              <div className="card bg-[#1572D3]/10 text-primary-content w-28">
                <div className="card-body items-center">
                  <Image
                    src={LocationTrick}
                    className="w-[48px] h-[48px]"
                    alt="location-trick"
                  />
                </div>
              </div>
              <p className="mt-10 text-center text-xl font-medium text-black whitespace-nowrap">Chose Location</p>
              <p className="mt-2 text-center text-sm font-medium text-slate-500">Choose your and find <br /> your best car</p>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="card bg-[#1572D3]/10 text-primary-content w-28">
                <div className="card-body">
                  <Image
                    src={Calendar}
                    className="w-[48px] h-[48px]"
                    alt="calendar"
                  />
                </div>
              </div>
              <p className="mt-10 text-center text-xl font-medium text-black whitespace-nowrap">Pick-up Date</p>
              <p className="mt-2 text-center text-sm font-medium text-slate-500">Select your pick up date and time to book your car</p>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="card bg-[#1572D3]/10 text-primary-content w-28">
                <div className="card-body">
                  <Image
                    src={Car1}
                    className="w-[48px] h-[48px]"
                    alt="car1"
                  />
                </div>
              </div>
              <p className="mt-10 text-center text-xl font-medium text-black whitespace-nowrap">Book your car</p>
              <p className="mt-2 text-center text-sm font-medium text-slate-500">Book your car and we will deliver <br /> it directly to you</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden whitespace-nowrap">
          <div className=" animate-scroll flex gap-20 items-center">
            <Image src={Honda} width={300} alt="honda" />
            <Image src={Jaguar} className="h-6 w-full" alt="jaguar" />
            <Image src={Nissan} width={100} alt="nissan" />
            <Image src={Volvo} width={300} alt="volvo" />
            <Image src={Ring} width={150} alt="ring" />
            <Image src={Acura} width={200} alt="acura" />

            {/* Duplikasi untuk looping animasi */}
            <Image src={Honda} width={300} alt="honda" />
            <Image src={Jaguar} className="h-6 w-full" alt="jaguar" />
            <Image src={Nissan} width={100} alt="nissan" />
            <Image src={Volvo} width={300} alt="volvo" />
            <Image src={Ring} width={150} alt="ring" />
            <Image src={Acura} width={200} alt="acura" />
          </div>
        </div>

        <div className="relative flex min-h-screen items-center justify-center gap-20">
          <div className="w-1/2 h-full">
            <Image
              src={Vector}
              className="absolute w-[800px] z-0"
            />
            <Image
              src={Car2}
              className="relative translate-y-44 z-10"
            />
          </div>
          <div className="w-1/2 h-full translate-y-48">
            <div className="h-10 w-44 bg-[#1572D3]/10 rounded-lg flex items-center justify-center ">
              <p className="text-[#1572D3] font-medium">HOW IT WORK</p>
            </div>
            <h1 className="text-4xl font-medium mt-8 tracking-wider">We offer the best experience <br /> with our rental deals</h1>
            <div className="flex flex-col mt-14 gap-6 space-y-3">
              <div className="flex gap-6">
                <div className="h-16 w-16 flex items-center justify-center bg-[#1572D3]/15 rounded-xl p-4">
                  <Image
                    src={Wallet}
                  />
                </div>
                <div className="space-y-2 -translate-y-3">
                  <h1 className="font-medium text-xl">Best price guaranteed</h1>
                  <p className="font-normal text-md text-slate-400 max-w-[330px]">Find a lower price? We’ll refund you 100% of the difference.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-16 w-16 flex items-center justify-center bg-[#1572D3]/15 rounded-xl p-4">
                  <Image
                    src={Wallet}
                  />
                </div>
                <div className="space-y-2 -translate-y-3">
                  <h1 className="font-medium text-xl">Best price guaranteed</h1>
                  <p className="font-normal text-md text-slate-400 max-w-[330px]">Find a lower price? We’ll refund you 100% of the difference.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-16 w-16 flex items-center justify-center bg-[#1572D3]/15 rounded-xl p-4">
                  <Image
                    src={Wallet}
                  />
                </div>
                <div className="space-y-2 -translate-y-3">
                  <h1 className="font-medium text-xl">Best price guaranteed</h1>
                  <p className="font-normal text-md text-slate-400 max-w-[330px]">Find a lower price? We’ll refund you 100% of the difference.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-16 w-16 flex items-center justify-center bg-[#1572D3]/15 rounded-xl p-4">
                  <Image
                    src={Wallet}
                  />
                </div>
                <div className="space-y-2 -translate-y-3">
                  <h1 className="font-medium text-xl">Best price guaranteed</h1>
                  <p className="font-normal text-md text-slate-400 max-w-[330px]">Find a lower price? We’ll refund you 100% of the difference.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
