import React from 'react'


export default function BinomialCard({data}) {
  
 
  const geometric_value = (data?.geometric?.exoected_days_for_gain || 0)
  const poission_2_percent = (data?.poission_2_percent?.lambda || 0)


  


  
  return (

    <div> 
 
              
              
                {/* Probability Insights */}

                    <div className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md h-full" >
                    

                        <div className="p-4 pt-1 pb-1">

                            <div className="flext items-center">
                    
                                <h2 className="flex items-center  font-bold text-sm text-blue-500 mt-1 gap-2 ">
                                     B(n,p) <p className = "text-black">Binomial</p>

                                </h2>

                                <h2 className="text-gray-500 pt-2 mb-4 text-sm">Exact outcomes in 5-day window</h2>

                            </div>

                            
                            
                            <div className="grid grid-cols-1 gap-4 pb-4">

                                {/* Geometric */}

                                
                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start  '>

                                        {/* Title*/}  
                                        <div className="flex  justify-center text-xs lg:text-md text-gray-500  tracking-wider "> P(exactly 3↑ in 5 days)
                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center mt-2 text-sm font-bold tracking-light `}>{geometric_value.toFixed(2)}
                                        </span>  
                                    
                                    </div>
                                </div>

                                {/* Poisson card */}

                                
                                <div className={`  `} >
                                        
                                        <div className='border-none shadow-none flex flex-col items-start '>

                                        {/* Title*/}  
                                        <p className="flex  justify-center text-xs lg:text-md text-gray-500  tracking-wider uppercase"> Poisson *lambda*(extreme -2%)
                                        </p>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center mt-2 text-md lg:text-lg font-bold tracking-light `}>{poission_2_percent.toFixed(2)}
                                        </span>  
                                    
                                        </div>
                                </div>

                            </div>

                        </div>
                    </div>

                            
    </div>
  )
}
