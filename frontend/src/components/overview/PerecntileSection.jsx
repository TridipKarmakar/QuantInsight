import { Sigma  } from "lucide-react";


import { Card, CardContent } from "@/components/ui/card.jsx" 
import PercentileCard from "../common/PercentilesCard ";

import React from 'react'

export default function PercentileSection({data}) {
  
  
  return (
    
    <Card className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md h-full" >
        <CardContent className="p-4 pt-1 pb-1">

                <div className="flext items-center">
    
                    <p className="flex items-center  font-bold text-lg text-gray-500 mt-1">
                    <Sigma size={22} strokeWidth={3} className="text-blue-500 mr-2"/> Return Percentiles

                    </p>

                </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 gap-4 mt-6">

                <PercentileCard title="5TH" value={data.stats.percentiles["5"]}/>
                <PercentileCard title="25TH" value={data.stats.percentiles["25"]}/>
                <PercentileCard title="50TH" value={data.stats.percentiles["50"]}/>
                <PercentileCard title="75TH" value={data.stats.percentiles["75"]}/>
                <PercentileCard title="95TH" value={data.stats.percentiles["95"]}/>
                
            </div>
        </CardContent>
    </Card>
    
  )
}
