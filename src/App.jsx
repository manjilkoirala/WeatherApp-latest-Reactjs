import React, { useState, useEffect } from "react";
import TopButtons from "./Component/TopButtons";
import SearchBox from "./Component/SearchBox";
import CurrentWeather from "./Component/Current/CurrentWeather";
import DailyWeather from "./Component/Daily/DailyWeather";
import getFormatedWeatherData from "./Component/Services/WeatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "Biratnagar" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  let tempUnit=`${units==="metric"?' °C':' °F'}`

  useEffect(() => {
    const fetchWeatherData = async () => {
      await getFormatedWeatherData({ ...query, units }).then((data) => {
      
        setWeather(data);
        
      });
    };

    fetchWeatherData();
    
  }, [query, units]);

  

  const formatTempBackground=()=>{
    if(!weather) return 'bg-slate-700'
    const threshold= units==="metric"? 20:68;
    if(weather.temp>=threshold) return 'bg-gradient-to-r from-orange-700 to-red-500'
    else return 'bg-gradient-to-r from-cyan-700 to-gray-400'
  }

  return (
    <div className="w-90%">
      <div className="flex flex-col items-center gap-4">
        <TopButtons setQuery={setQuery}  />
        <SearchBox setQuery={setQuery} units={units} setUnits={setUnits}/>

        {!weather ? (
          <div className="flex justify-center  mt-28 text-white tex-xl md:text-3xl">
            {" "}
            <span>Loading.... or</span> &nbsp; Incorrect City Name
          </div>
        ) : (
          <div className="flex items-center lg:items-start gap-8 mt-2 lg:flex-row flex-col sm:px-4">
            <CurrentWeather weather={weather} tempUnit={tempUnit} units={units} hourly={weather.hourly} formatTempBackground={formatTempBackground}/>
            <DailyWeather items={weather.daily} tempUnit={tempUnit} weather={weather}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
