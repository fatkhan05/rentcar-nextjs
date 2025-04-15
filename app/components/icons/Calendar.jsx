import React from 'react'
import Image from "next/image";
import CalendarIcon from "@/assets/image/calendar.png"

const Calendar = () => {
  return (
    <div>
      <Image
        src={CalendarIcon}
        width={30}
        alt="calendar-icons"
      />
    </div>
  )
}

export default Calendar