import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card.jsx" 

import React from 'react'

export default function PercentileCard({ title, value}) {
  
  let f_value = value;
  
  if (value > 0) {
    f_value = "+" + (value * 100).toFixed(4) + "%";
  } else if (value < 0) {
    f_value = "-" + (Math.abs(value) * 100).toFixed(4) + "%";
  } else {
    f_value = "0" + (value * 100).toFixed(4) + "%";
  }

  const isPositive = value > 0;

  return (

<div className={` p-4   ${isPositive ? "bg-green-50" : "bg-red-50"}  rounded-2xl hover:shadow-md`} >
        
        <div className='border-none shadow-none flex flex-col items-center justify-center '>

        {/* Title*/}  
          <div className="flex justify-center text-xs lg:text-md font-bold text-gray-500 tracking-wider uppercase">{title}
          </div>   
          
        {/* Value*/}
          
          <div className={`flex justify-center mt-2 text-md lg:text-lg font-bold tracking-light ${isPositive ? "text-green-600" : "text-red-500"}`}>{f_value}
          </div>  
    
      </div>
</div>
)
}

