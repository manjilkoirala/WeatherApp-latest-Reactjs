import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
const SearchBox = ({setQuery,units, setUnits}) => {
  const [city, setCity] = useState('')

  //Handle the search
  const handleSearch = (e) => {
    e.preventDefault()
    setQuery({q:city})}

    //Handle the Current Location
    const handleCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setQuery({lat:position.coords.latitude, lon:position.coords.longitude})
      })
    }

    //Handle the units change

    const handleUnits = (e) => {
      if(units !== e.target.name){
      setUnits(e.target.name)
      
    }}


  return (
    <div className='flex gap-4 items-center w-full justify-center px-3'>
      <div className="flex pl-4 overflow-hidden py-4 items-center bg-white sm:w-[65%] lg:w-[70%] w-[55%] gap-2 rounded-xl h-16">
      <input
          type="text"
          placeholder="Enter the location"
          className="border-none outline-none w-full"
          value={city}
          onChange={(e) => setCity(e.target.value)}
         
        />
        <button
          className="bg-gray-200 h-16 text-xl font-semibold ml-4 px-6"
          type="submit"
          onClick={handleSearch}
        >
          <FaSearch size={26}/>
        </button>
    </div>
    <FaLocationDot color='white' size={30} cursor='pointer' onClick={handleCurrentLocation} />
    <div className='flex gap-2 text-3xl font-medium text-slate-200 cursor-pointer items-center'>
    <button name='metric' onClick={handleUnits} className= {units==="metric"?'bg-slate-600 rounded-md p-2 text-white': null}>°C</button> |
    <button  name='Imperial' onClick={handleUnits} className={units==="Imperial"?'bg-slate-600 rounded-md p-2 text-white': null} >°F</button>
    
    </div>
    
    </div>
  )
}

export default SearchBox
