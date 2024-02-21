import React from 'react'
import { useState } from 'react'

const TopButtons = ({setQuery}) => {
    
   

    
    const cities=[
        {
            id:0,
            city:"Biratnagar"
        },
        {
            id:1,
            city:"Kathmandu"
        },
        {
            id:2,
            city:"Lalitpur"
        },
        {
            id:3,
            city:"Bhaktapur"
        },
        {
            id:4,
            city:"Pokhara"
        },
        {
            id:5,
            city:"Butwal"
        }
    ]
        
    
  return (
    <div className='items-center justify-center gap-2 mt-6 flex font-medium lg:text-xl  px-2 flex-wrap '>

        {cities.map(city=>{
            
            return(
                <div key={city.id} className='text-white px-4 py-2 transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out'>
                   
                <button onClick={()=>setQuery({q:city.city})}  className=''>{city.city}</button>
            </div>
            )
        })}
      
    </div>
  )
}

export default TopButtons
