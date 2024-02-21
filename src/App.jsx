import React, { useState, useEffect } from "react";
import TopButtons from "./Component/TopButtons";
import SearchBox from "./Component/SearchBox";
import CurrentWeather from "./Component/Current/CurrentWeather";
import DailyWeather from "./Component/Daily/DailyWeather";
import getFormatedWeatherData from "./Component/Services/WeatherService";
import {WeatherContext} from "./Context/WeatherContext";
import {useContext} from "react";

const App = () => {
  const [query, setQuery] = useState({ q: "Biratnagar" });
 

  const weathers=useContext(WeatherContext);

  let units = weathers.units;



  ;

  useEffect(() => {
    const fetchWeatherData = async () => {
      await getFormatedWeatherData({ ...query, units }).then((data) => {
        weathers.setWeather(data);
      });
    };

    fetchWeatherData();
  }, [query, units]);

  const formatTempBackground = () => {
    if (!weathers.weather) return "bg-slate-700";
    const threshold = units === "metric" ? 20 : 68;
    if (weathers.weather.temp >= threshold)
      return "bg-gradient-to-r from-orange-700 to-red-500";
    else return "bg-gradient-to-r from-cyan-700 to-gray-400";
  };

  return (
    <div className="w-90%">
      <div className="flex flex-col items-center gap-4">
        <TopButtons setQuery={setQuery} />
        <SearchBox setQuery={setQuery} units={weathers.units} setUnits={weathers.setUnits} />

        {!weathers.weather ? (
          <div className="flex justify-center  mt-28 text-white tex-xl md:text-3xl">
            {" "}
            <span>Loading.... or</span> &nbsp; Incorrect City Name
          </div>
        ) : (
          <div className="flex items-center lg:items-start gap-8 mt-2 lg:flex-row flex-col sm:px-4">
            <CurrentWeather
             
              units={units}
             
              formatTempBackground={formatTempBackground}
            />
            <DailyWeather
              items={weathers.weather.daily}
              tempUnit={weathers.tempUnit}
              weather={weathers.weather}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
