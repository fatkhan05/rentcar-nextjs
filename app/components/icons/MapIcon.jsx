import React from 'react'
import Image from "next/image";
import MapIcons from "@/assets/image/location.png"
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapIcon = () => {
  return (
    <div>
      <Image 
        src={MapIcons}
        width={30}
        alt="maps-icon"
      />
    </div>
  )
}

export default MapIcon