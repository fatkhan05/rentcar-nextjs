import React from 'react'
import Image from "next/image";
import CarHero from "@/assets/image/car.png"
import PlayStore from "@/assets/image/google.png"
import AppStore from "@/assets/image/appstore.png"
import Vector1 from "@/assets/image/vector.png"

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-between w-full mt-40 min-h-10">
        <div className="px-36 relative -top-16">
          <p className="text-5xl font-semibold">Find, book and rent a car 
            <span className="text-[#1572D3] inline-block ml-4">
              Easily 
              <Image
                src={Vector1}
                className="w-[150px] absolute right-1/5"
                alt=""
              />
            </span>
          </p>
          <p className="text-lg font-normal mt-6">Get a car wherever and whenever you <br /> need it with your IOS and Android device.</p>
          <div className="flex gap-4 mt-12">
            <div className="">
              <Image
                src={PlayStore}  
                className="w-[150px] hover:cursor-pointer hover:shadow-xl hover:scale-105 ease-in-out duration-300"
                alt=""
              />
            </div>
            <div className="">
              <Image
                src={AppStore}
                className="w-[150px] hover:cursor-pointer hover:shadow-xl hover:scale-105 ease-in-out duration-300"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={CarHero}
            className="w-full max-w-[1450px]"
            alt="Hero Car"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection