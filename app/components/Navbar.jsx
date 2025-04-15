import Image from 'next/image'
import React from 'react'
import LoggoNav from '@/assets/image/logo.png'

const Navbar = () => {
  return (
    <div className="navbar bg-transparent px-36 py-8 fixed top-0 left-0 right-0 z-10">
      <div className="navbar-start">
          <Image
            src={LoggoNav}
            width={120}
            height={80}
          />
      </div>
      <div className="navbar-center">
        <div className="flex">
          <ul className="flex flex-row gap-20 font-medium">
            <li className="hover:cursor-pointer hover:opacity-60">Become a renter</li>
            <li className="hover:cursor-pointer hover:opacity-60">Rental deals</li>
            <li className="hover:cursor-pointer hover:opacity-60">How it work</li>
            <li className="hover:cursor-pointer hover:opacity-60">Why chose us</li>
          </ul>
        </div>
      </div>
      <div className="navbar-end gap-3">
        <button className="btn btn-ghost font-medium text-dark btn-sm border-none">Sign In</button>
        <button className="btn bg-[#1572D3] font-medium text-white btn-sm border-none px-6 hover:none">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar