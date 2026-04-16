import { Card, CardContent } from "@/components/ui/card.jsx" 

import React from 'react'

export default function StatCard({ title, value}) {
  
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

<Card className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md h-full" >

    <CardContent className="p-4 pt-1 pb-1">
    <div className=''>
        {/* Title*/}
        <p className="text-xs font-semibold text-gray-500 tracking-wider uppercase">{title}</p>   
        
      {/* Value*/}
        <h2 className={`mt-2 text-xl font-bold tracking-light ${isPositive ? "text-green-600" : "text-red-500"}`}>{f_value}</h2>  
    </div>
    </CardContent>
</Card>
)
}

