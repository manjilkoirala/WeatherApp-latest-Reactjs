import React from 'react'
import DailyComponent from './DailyComponent'

const DailyWeather = ({items,tempUnit}) => {
  
  return (
    <div className='flex flex-col gap-2 items-center my-4'>
      <h2 className='md:text-3xl text-2xl text-white font-semibold mb-2'>Daily Forecast</h2>
      
        {items.map((item,index)=>{
          return <DailyComponent key={index} item={item} tempUnit={tempUnit} />
        })}
        

      
      
      
    </div>
  )
}

export default DailyWeather
