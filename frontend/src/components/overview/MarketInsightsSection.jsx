import { Lightbulb, ChevronRight  } from "lucide-react";


import { Card, CardContent } from "@/components/ui/card.jsx" 
// import MarketInsightCard from "../common/MarketInsightCard.jsx";

import React from 'react'

export default function MarketInsightsSection({data}) {
  
  console.log(data)
  const insights = data.insights || [];
  
  return (
    
    <Card className="rounded-2xl shadow-sm  bg-blue-50 border border-blue-200 hover:shadow-md h-full" >
        <CardContent className="p-4 pt-1 pb-1">

                <div className="flext items-center gap-2 mb-4">

                    
                    
                    <p className="flex items-center  font-bold text-lg text-blue-500 mt-1">
                    <Lightbulb size={22} strokeWidth={3} className="text-blue-500 mr-2"/> Market Insights

                    </p>

                </div>

            <ul className="space-y-2">
            {
                
                insights.map((item, index) =>(
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    
                    
                    {/* Arrow */}
                    <ChevronRight className="text-blue-500 mt-0.5" />
                    {/* Text */}
                    <span>{item}</span>

                  </li>  
                ))
            }    
                            
            </ul>


        </CardContent>
    </Card>
    
  )
}
