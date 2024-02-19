import React, { useEffect, useState } from "react";
import { FaCloud, FaTemperatureLow, FaWater, FaWind } from "react-icons/fa";
import HourlyForecast from "./HourlyForecast";
import { formatToLocalTime, iconUrlFromCode } from "../Services/WeatherService";

const CurrentWeather = ({formatTempBackground,tempUnit,hourly,weather:{
  name,country,dt,timezone,temp,detail,feels_like,speed,all,humidity,icon}}) => {
    
    
    
  return (
    <div className="flex flex-col items-center mt-8">
      <div className={`flex flex-col  m:w-full w-[full] py-4 rounded-xl ${formatTempBackground()}`}>
      <div className="flex flex-col items-center px-4">
        <h2 className=" sm:text-3xl text-2xl text-white font-semibold">CURRENT WEATHER</h2>
        <div className="flex sm:gap-20 gap-8 mt-4 items-center">
          <div className="flex flex-col items-center">
            <h3 className=" text-lg font-medium text-slate-100">{name}, {country}</h3>
            <p className=" text-slate-300">{formatToLocalTime(dt,timezone)}</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className=" text-lg font-medium text-slate-100">{temp}{tempUnit} </h3>
            <p className=" text-slate-300">{detail}</p>
          </div>
          <img src={iconUrlFromCode(icon)} alt="icons" className="lg:w-[100px] sm:w-[80px] w-[60px]" />
        </div>
      </div>
      <div className="flex flex-col items-center sm:px-8 px-2 mt-6 ">
        <h2 className=" sm:text-2xl text-xl text-white font-semibold">AIR CONDITION</h2>

        
        <div className="flex sm:flex-row flex-col items-center sm:gap-16 gap-4  mt-4">
         <div className="flex gap-16">
         <div className="flex flex-col  items-center">
            <div className="flex items-center gap-2">
              
              <FaTemperatureLow className="text-slate-300" />
              <h3 className="font-medium text-slate-300">
                Feels
              </h3>
            </div>
            <p className=" text-slate-100">{feels_like} {tempUnit}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              
              <FaWind className="text-slate-300" />
              <h3 className="  font-medium text-slate-300">
                Wind
              </h3>
            </div>
            <p className=" text-slate-100">{speed}m/s</p>
          </div>
         </div>
          <div className="flex gap-16">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              
              <FaCloud className="text-slate-300" />
              <h3 className=" font-medium text-slate-300">
                Cloud
              </h3>
            </div>
            <p className=" text-slate-100">{all}%</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              
              <FaWater className="text-slate-300" />
              <h3 className="font-medium text-slate-300">
                Humidity
              </h3>
            </div>
            <p className=" text-slate-100">{humidity}%</p>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex flex-col items-center md:px-8 px-2 py-6">
        <h2 className=" text-2xl text-white font-semibold">TODAY'S FORECAST</h2>
        <div className="flex gap-6 items-center justify-center flex-wrap mt-4">
        {hourly.map((item,index)=>{
          
          return <HourlyForecast  tempUnit={tempUnit} items={item} key={index}/>
        })}
        
        
        </div>
      </div>
      
    </div>
  );
};

export default CurrentWeather;
