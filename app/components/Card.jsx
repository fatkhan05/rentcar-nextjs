import React from 'react'
import Image from "next/image";
import Star from "@/assets/image/star.png"
import JaguarCar from "@/assets/image/jaguarcar.png"
import User from "@/assets/image/user.png"
import Engine from "@/assets/image/engine.png"
import AirConditioner from "@/assets/image/ac.png"
import Door from "@/assets/image/door.png"
import ArrowRight from './icons/ArrowRight';
import Audi from "@/assets/image/audi.png"
import Bmw from "@/assets/image/bmw.png"
import Lambo from "@/assets/image/lambo.png"

const cars = [
  {
    name: 'Jaguar XE L P250',
    image: JaguarCar,
    rating: 4.8,
    reviews: 2436,
    price: 1800,
    features: [
      { icon: User, label: '4 Passenger' },
      { icon: Engine, label: 'Auto' },
      { icon: AirConditioner, label: 'Airconditioner' },
      { icon: Door, label: '4 Door' },
    ],
  },
  {
    name: 'Audi R8',
    image: Audi,
    rating: 4.6,
    reviews: 1936,
    price: 2100,
    features: [
      { icon: User, label: '2 Passenger' },
      { icon: Engine, label: 'Auto' },
      { icon: AirConditioner, label: 'Airconditioner' },
      { icon: Door, label: '2 Door' },
    ],
  },
  {
    name: 'BMW M3',
    image: Bmw,
    rating: 4.5,
    reviews: 2036,
    price: 1600,
    features: [
      { icon: User, label: '4 Passenger' },
      { icon: Engine, label: 'Auto' },
      { icon: AirConditioner, label: 'Airconditioner' },
      { icon: Door, label: '4 Door' },
    ],
  },
  {
    name: 'Lamborghini Huracan',
    image: Lambo,
    rating: 4.8,
    reviews: 2236,
    price: 2300,
    features: [
      { icon: User, label: '2 Passenger' },
      { icon: Engine, label: 'Auto' },
      { icon: AirConditioner, label: 'Airconditioner' },
      { icon: Door, label: '2 Door' },
    ],
  },
]

const Card = () => {
  return (
    <>
      {cars.map((item, index) => (
      <div key={index} className="card bg-base-100 w-64 h-[430px] shadow-xl">
        <figure className="px-8 pt-10">
          <Image
            src={item.image}
            className=""
            alt={item.name}
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="font-medium text-md">{item.name}</h2>
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={Star}
              className="w-4 h-4"
              alt="jaguar-car"
            />
            <p className="text-sm font-medium">{item.rating}{' '} <span className="text-xs text-slate-400">({item.reviews.toLocaleString()} reviews)</span></p>
          </div>

          <div className="grid grid-cols-2 gap-y-2 mt-3">
            {item.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <Image src={feature.icon} className="w-4 h-4" alt={feature.label}/>
                <p className="text-xs font-normal text-slate-400">{feature.label}</p>
              </div>
            ))}
          </div>

          <hr className="mt-6" />
          <div className="flex items-center justify-between mt-2">
            <div>
              <p className="text-sm text-slate-400">Price</p>
            </div>
            <div>
              <p><span className="text-sm font-semibold">${item.price.toLocaleString()}</span>{' '} <span className="text-sm text-slate-400">/ day</span></p>
            </div>
          </div>
          <div className="card-actions flex justify-center mt-4">
            <button className="btn btn-sm items-center w-full bg-[#1572D3] font-medium text-white">Rent Now <ArrowRight/></button>
          </div>
        </div>
      </div>
      ))}
    </>
  )
}

export default Card