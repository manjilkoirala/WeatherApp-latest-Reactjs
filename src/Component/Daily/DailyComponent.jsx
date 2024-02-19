import React from 'react'
import { useState } from 'react'
import { FaCloud, FaTemperatureLow, FaWind } from 'react-icons/fa'
import { FiSunrise,FiSunset  } from "react-icons/fi";
import { iconUrlFromCode } from '../Services/WeatherService'

const DailyComponent = ({item,tempUnit}) => {
  const [className, setClassName] = useState('flex')
  const change =()=>{
    {className==='flex'?setClassName('hidden'):setClassName('flex')}
    
  }
 
  return (
    <details className='bg-slate-300 rounded-lg' >
      <summary onClick={change} className='flex items-center hover:cursor-pointer'>
      <div className={`flex justify-between items-center sm:w-[500px] md:w-[700px] lg:w-[400px] w-[350px] xl:w-[600px] md:px-4 px-2 py-6 `}>
       
            <h3 className={` ${className} md:text-xl text-base`}>{item.title}</h3>
            <div className={` ${className} items-center md:text-xl text-base`}><FaTemperatureLow/><p>{item.temp} { tempUnit}</p></div>
           
            <div className={` ${className} items-center md:text-xl text-base`}><img src={iconUrlFromCode(item.icon)} alt="weather icon" className='md:w-[40px] w-[30px]' /> <p>{item.detail}</p> </div>
        </div>
      </summary>

      <div className='px-4 mb-4 flex flex-col'>

        {/* Day Temperature Detail */}

      <div className='flex items-center justify-between'>
        <div className='flex-col'>
          <h3 className='md:text-xl text-base text-slate-700'>{item.title}</h3>
          <div className='flex gap-1 items-center'><h2 className='md:text-4xl text-2xl text-slate-800 font-bold '>{Math.round(item.temp) } { tempUnit}</h2><img src={iconUrlFromCode(item.icon)} alt="weather icon" className='md:w-[70px] w-[30px]' /></div>
          
          </div>
          <div className='md:text-xl text-base font-semibold'>{item.detail}</div>
          <div className='md:text-xl flex flex-col text-base items-center'><h2 className='text-slate-700'>Feels Like</h2><div className='text-slate-800 font-semibold'>{Math.round(item.feels_like)} { tempUnit}</div></div>
          
      </div>

      {/* Other Temperature Detail */}



      <div className='flex items-center justify-between'>
        <div className='flex-col'>
          
          <h3 className='md:text-base text-sm flex gap-1 text-slate-600 '>Mor:<div className='text-slate-700'>{Math.round(item.morn)} { tempUnit}</div> </h3>
          <h3 className='md:text-base text-sm flex gap-1 text-slate-600 '>Even: <div className='text-slate-700'>{Math.round(item.eve)} { tempUnit}</div> </h3>
          <h3 className='md:text-base text-sm flex gap-1 text-slate-600 '>Ngt:<div className='text-slate-700'>{Math.round(item.night)} { tempUnit}</div> </h3>
          </div>
          <div className='flex-col'>
          <div className='md:text-base text-sm flex gap-1 text-slate-600 '>💧Hum: <div className='text-slate-700'>{item.humidity}%</div></div>
          <div className='md:text-base text-sm flex gap-1 text-slate-600  '> <FaWind/>  Wind: <div className='text-slate-700'>{item.wind_speed}%</div></div>
          <div className='md:text-base text-sm flex gap-1 text-slate-600  '> <FaCloud/>  Cloud: <div className='text-slate-700'>{item.clouds}%</div></div>
          </div>
          <div className='flex-col'>
          <div className='md:text-base text-sm flex gap-1 text-slate-600 '> <FiSunrise/> Rise: <div className='text-slate-700'>{item.sunrise}</div></div>
          <div className='md:text-base text-sm flex gap-1 text-slate-600 '> <FiSunset/> Set: <div className='text-slate-700'>{item.sunset}</div></div>          </div>
          
      </div>
      </div>

    </details>
      
    
  )
}

export default DailyComponent
