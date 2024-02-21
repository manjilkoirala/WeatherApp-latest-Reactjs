import React from 'react'
import { FaWind } from 'react-icons/fa'
import { iconUrlFromCode } from '../Services/WeatherService'
import {formatToLocalTime} from '../Services/WeatherService'
const HourlyForecast = ({items,tempUnit,onClick}) => {
  
  return (
    <div className='flex flex-col items-center cursor-pointer transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out' onClick={onClick}>
     <p className='text-slate-300'>{formatToLocalTime(items.title, items.timezone, "hh:mm a")}</p>
     <img src={iconUrlFromCode(items.icon)} alt="" />
     <h3 className='text-lg font-medium text-slate-100'>{Math.floor(Number(items.temp))} {tempUnit}</h3>


    </div>
  )
}

export default HourlyForecast
