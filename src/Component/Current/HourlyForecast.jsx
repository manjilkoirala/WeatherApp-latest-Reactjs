import React from 'react'
import { FaWind } from 'react-icons/fa'
import { iconUrlFromCode } from '../Services/WeatherService'
const HourlyForecast = ({items,tempUnit}) => {
  
  return (
    <div className='flex flex-col items-center'>
     <p className='text-slate-300'>{items.title}</p>
     <img src={iconUrlFromCode(items.icon)} alt="" />
     <h3 className='text-lg font-medium text-slate-100'>{Math.floor(Number(items.temp))} {tempUnit}</h3>


    </div>
  )
}

export default HourlyForecast
