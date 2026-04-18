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

<Card className=" border-0 shadow-none bg-slate-50  rounded-2xl hover:shadow-md" >
    
        
        <CardHeader className='border-none shadow-none bg-slate-50 flex flex-col items-center justify-center '>

        {/* Title*/}  
          <CardDescription className="flex justify-center text-xs text-gray-500 tracking-wider uppercase">{title}
          </CardDescription>   
          
        {/* Value*/}
          
          <CardTitle className={`flex justify-center mt-2 text-md font-bold tracking-light ${isPositive ? "text-green-600" : "text-red-500"}`}>{f_value}
          </CardTitle>  
    
      </CardHeader>
</Card>
)
}

