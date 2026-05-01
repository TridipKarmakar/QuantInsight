import { ChevronRight, SquareActivity, Dices } from "lucide-react";
import React from 'react'

import BinomialCard  from '../common/BinomialCard.jsx' 




export default function DistributionInsight({data}) {
  
  

  
  return (

    <div>   
                <div className="mb-5 mt-10 text-sm  flex items-center  gap-2">

                    <Dices size={16} className="text-blue-500"/>
                    <span className=" ml-2 uppercase tracking-wide font-medium text-stone-500" >Distribution</span>
                    <ChevronRight size={13} className="text-gray-400 ml-2"/>
                
                </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              
                {/* Binomial Probability */}
                    
                    
                    <BinomialCard data={data}/>
                    <BinomialCard data={data}/>
                    <BinomialCard data={data}/>
                    <BinomialCard data={data}/>

                    

                </div>





                
    </div>
  )
}
