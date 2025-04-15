import React from 'react'
import MapIcon from './icons/MapIcon'
import Calendar from './icons/Calendar'

const SearchBox = () => {
  return (
    <div className="relative px-32 top-0">
      <div className="justify-center items-center shadow-xl h-20 w-full bg-white rounded-2xl">
        <div className="flex items-center justify-between gap-4 ps-8 pe-3 py-4">
          <div className="w-full flex items-center gap-3">
            <MapIcon/>
            <div>
              <p className="font-normal">Location</p>
              <p className="text-xs text-slate-400">Search your location</p>
            </div>
          </div>
          <div className="w-full flex items-center gap-3">
            <div className="h-8 border-l-2 border-gray-300 me-4"></div>
            <Calendar/>
            <div>
              <p className="font-normal">Pick Up Date</p>
              <p className="text-xs text-slate-400">Tue 15 Feb, 09:00</p>
            </div>
          </div>
          <div className="w-full flex items-center gap-3">
            <div className="h-8 border-l-2 border-gray-300 me-4"></div>
            <Calendar/>
            <div>
              <p className="font-normal">Return Date</p>
              <p className="text-xs text-slate-400">Thu 16 Feb, 11:00</p>
            </div>
          </div>
          <div className="ms-auto">
            <a className="right-0 btn bg-[#1572D3] hover:bg-[#1572D3] font-medium text-white h-1 outline-none">Search</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBox