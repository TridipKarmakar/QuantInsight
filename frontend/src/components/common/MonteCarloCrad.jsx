import { SquareActivity  } from "lucide-react";
import React from 'react'





export default function MonteCarlocard({data}) {
  
  const geometric_value = (data?.geometric?.exoected_days_for_gain || 0)


  
  return (

        <div> 
   

                {/* Monte Carlo Simulation */}

                    <div className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md h-full" >
                    

                        <div className="p-4 pt-1 pb-1">

                            <div className="flext items-center">
                    
                                <p className="flex items-center  font-bold text-lg text-gray-500 mt-1">
                                    <SquareActivity size={22} strokeWidth={3} className="text-blue-500 mr-2"/> Monte Carlo Simulation

                                </p>

                                <h2 className="text-gray-500 pt-2 mb-4">30-day forward projections — 1,000 runs</h2>

                            </div>

                           {/* Mean Price & Median Price */}
                            
                            <div className="grid grid-cols-2 gap-4 mb-4">

                                {/* Min Price */}

                                
                                <div className={``} >
                                        
                                        <div className='border-none shadow-none flex flex-col items-start '>

                                        {/* Title*/}  
                                        <div className="flex  justify-center text-xs lg:text-md text-gray-500  tracking-wider uppercase"> Geometric: E[days to gain]
                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center mt-2 text-md lg:text-lg font-bold tracking-light `}>{geometric_value.toFixed(2)}
                                        </span>  
                                    
                                    </div>
                                </div>

                                {/* Median Price */}

                                
                                <div className={` `} >
                                        
                                        <div className='border-none shadow-none flex flex-col items-start '>

                                        {/* Title*/}  
                                        <div className="flex  justify-center text-xs lg:text-md text-gray-500  tracking-wider uppercase"> Geometric: E[days to gain]
                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center mt-2 text-md lg:text-lg font-bold tracking-light `}>{geometric_value.toFixed(2)}
                                        </span>  
                                    
                                    </div>
                                </div>

                            </div>


                            {/* Min Price & Max Price */}
                            
                            <div className="grid grid-cols-2 gap-4 mb-4">

                                {/* Geometric and Poisson card */}

                                
                                <div className={``} >
                                        
                                        <div className='border-none shadow-none flex flex-col items-start  '>

                                        {/* Title*/}  
                                        <div className="flex  justify-center text-xs lg:text-md text-gray-500  tracking-wider uppercase"> Geometric: E[days to gain]
                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center mt-2 text-md lg:text-lg font-bold tracking-light `}>{geometric_value.toFixed(2)}
                                        </span>  
                                    
                                    </div>
                                </div>

                                {/* Geometric and Poisson card */}

                                
                                <div className={``} >
                                        
                                        <div className='border-none shadow-none flex flex-col items-start '>

                                        {/* Title*/}  
                                        <div className="flex  justify-center text-xs lg:text-md text-gray-500  tracking-wider uppercase"> Geometric: E[days to gain]
                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center mt-2 text-md lg:text-lg font-bold tracking-light `}>{geometric_value.toFixed(2)}
                                        </span>  
                                    
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                
                </div>
  )
}
