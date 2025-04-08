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
            <li>Become a renter</li>
            <li>Rental deals</li>
            <li>How it work</li>
            <li>Why chose us</li>
          </ul>
        </div>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn btn-ghost font-medium">Sign In</a>
        <a className="btn bg-[#1572D3] font-medium text-white h-1 outline-none">Sign Up</a>
      </div>
    </div>
  )
}

export default Navbar