import { TrendingUp, ChevronRight, SquareActivity  } from "lucide-react";
import React from 'react'

import ProbabilityInsightCard from '../common/ReturnPercentileCrad' 
import MonteCarlocard from '../common/MonteCarloCrad' 




export default function ProbabilityInsight({data}) {
  
  

  
  return (

    <div>   
                <div className="mb-5 mt-10 text-sm  flex items-center  gap-2">

                    <TrendingUp size={16} className="text-blue-500"/>
                    <span className=" ml-2 uppercase tracking-wide font-medium text-stone-500" >Analysis</span>
                    <ChevronRight size={13} className="text-gray-400 ml-2"/>
                
                </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
                {/* Probability Insights */}
                    
                    
                    <ProbabilityInsightCard data={data}/>

                    

                {/* Monte Carlo Simulation */}
                    <MonteCarlocard data={data} />

                </div>





                
    </div>
  )
}
