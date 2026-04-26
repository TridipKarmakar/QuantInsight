import { TrendingUp, ChevronRight  } from "lucide-react";
import React from 'react'


function ProgressBar({ value, color}){
    return (
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden ">
            <div 
            className={`h-full ${color}`}
            style={{ width: `${value}%`}} ></div>
        </div>
    )
}


export default function ProbabilityInsight({data}) {
  
  const up = (data?.probability?.prob_up || 0) * 100
  const down = (data?.probability?.prob_down || 0) * 100


  
  return (

    <div>
                <div className="mb-5 mt-10 text-sm  flex items-center  gap-2">

                    <TrendingUp size={16} className="text-blue-500"/>
                    <span className=" ml-2 uppercase tracking-wide font-medium text-stone-500" >Analysis</span>
                    <ChevronRight size={13} className="text-gray-400 ml-2"/>
                
                </div>
                <div className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md h-full" >
                

                    <div className="p-4 pt-1 pb-1">

                        <div className="flext items-center">
                
                            <p className="flex items-center  font-bold text-lg text-gray-500 mt-1">
                                <TrendingUp size={22} strokeWidth={3} className="text-blue-500 mr-2"/> Return Percentiles

                            </p>

                            <h2 className="text-gray-500 pt-2 mb-4">Empirical up/down probabilities from historical data</h2>

                        </div>

                        {/* Up */}

                        <div>
                            <div className="flex justify-between text-gray-700 text-sm font-bold mb-1">
                                <span>Probability Up</span>
                                <span className="text-green-600 font-medium">{up.toFixed(2)}%</span>
                            </div>
                            <ProgressBar value={up} color="bg-blue-500" />
                        </div>

                        {/* Down */}

                        <div className="mt-5 pb-4">
                            <div className="flex justify-between text-gray-700 text-sm font-bold mb-1">
                                <span>Probability Down</span>
                                <span className="text-red-600 font-medium">{down.toFixed(2)}%</span>
                            </div>
                            <ProgressBar value={down} color="bg-blue-500" />
                        </div>
                        




                    </div>
                </div>
    </div>
  )
}
