import React, { useEffect, useState } from "react";
import { FaCloud, FaTemperatureLow, FaWater, FaWind } from "react-icons/fa";
import HourlyForecast from "./HourlyForecast";
import { formatToLocalTime, iconUrlFromCode } from "../Services/WeatherService";
import { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext";

const CurrentWeather = ({formatTempBackground,hourly}) => {

    const allData=useContext(WeatherContext);
    const weathers=allData.weather;

    

    const onClick=(item)=>{
      
      allData.setWeather({...weathers, ...{temp:item.temp,icon:item.icon,feels_like:item.feels_like,humidity:item.humidity,all:item.clouds,speed:item.wind_speed,dt:item.title,timezone:item.timezone }});

    }
    
    
    
  return (
    <div className="flex flex-col items-center mt-8">
      <div className={`flex flex-col  m:w-full w-[full] py-4 rounded-xl ${formatTempBackground()}`}>
      <div className="flex flex-col items-center px-4">
        <h2 className=" sm:text-3xl text-2xl text-white font-semibold">CURRENT WEATHER</h2>
        <div className="flex sm:gap-20 gap-8 mt-4 items-center">
          <div className="flex flex-col items-center">
            <h3 className=" text-lg font-medium text-slate-100">{weathers.name}, {weathers.country}</h3>
            <p className=" text-slate-300">{formatToLocalTime(weathers.dt,weathers.timezone)}</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className=" text-lg font-medium text-slate-100">{weathers.temp}{allData.tempUnit} </h3>
            <p className=" text-slate-300">{weathers.detail}</p>
          </div>
          <img src={iconUrlFromCode(weathers.icon)} alt="icons" className="lg:w-[100px] sm:w-[80px] w-[60px]" />
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
            <p className=" text-slate-100">{weathers.feels_like} {allData.tempUnit}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              
              <FaWind className="text-slate-300" />
              <h3 className="  font-medium text-slate-300">
                Wind
              </h3>
            </div>
            <p className=" text-slate-100">{weathers.speed}m/s</p>
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
            <p className=" text-slate-100">{weathers.all}%</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              
              <FaWater className="text-slate-300" />
              <h3 className="font-medium text-slate-300">
                Humidity
              </h3>
            </div>
            <p className=" text-slate-100">{weathers.humidity}%</p>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex flex-col items-center md:px-8 px-2 py-6">
        <h2 className=" text-2xl text-white font-semibold">TODAY'S FORECAST</h2>
        <div className="flex gap-6 items-center justify-center flex-wrap mt-4">
        {weathers.hourly.map((item,index)=>{
          
          return <HourlyForecast  tempUnit={allData.tempUnit} items={item} key={index} onClick={()=>onClick(item)}/>
        })}
        
        
        </div>
      </div>
      
    </div>
  );
};

export default CurrentWeather;
