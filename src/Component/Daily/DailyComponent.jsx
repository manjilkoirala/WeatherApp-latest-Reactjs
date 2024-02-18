import React from 'react'
import { FaCloud, FaSun, FaTemperatureHigh, FaTemperatureLow, FaWind } from 'react-icons/fa'
import { iconUrlFromCode } from '../Services/WeatherService'

const DailyComponent = ({item,tempUnit}) => {
 
  return (
    <div className='flex justify-between items-center lg:gap-24 sm:gap-36 w-full  gap-12 p-2 bg-slate-300 rounded-lg'>
        <div className='flex flex-col items-center gap-2'>
            <h3>{item.title}</h3>
            <div className='flex items-center'><img src={iconUrlFromCode(item.icon)} alt="weather icon" className='w-[30px]' /> <p>{item.detail}</p> </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center'><FaTemperatureLow/><p>{item.temp} { tempUnit}</p></div>
            <div className='flex items-center'><FaCloud size={10} /> <p>{item.clouds}%</p> </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center'><FaWind/><p>{item.wind_speed}m/s</p></div>
            <div className='flex items-center'><FaTemperatureHigh size={10} /> <p>{item.humidity}%</p> </div>
        </div>
      
    </div>
  )
}

export default DailyComponent
