import { SquareActivity, Lightbulb  } from "lucide-react";
import React from 'react'





export default function MonteCarlocard({data}) {
  
  const geometric_value = (data?.geometric?.exoected_days_for_gain || 0)
  
  const monte_carlo_mean = (data?.monte_carlo?.mean_price || 0)
  const monte_carlo_medium = (data?.monte_carlo?.mediun_price || 0)
  const monte_carlo_min = (data?.monte_carlo?.min_price || 0)
  const monte_carlo_max = (data?.monte_carlo?.max_price || 0)
  
  
  return (

        <div> 
   

                {/* Monte Carlo Simulation */}

                    <div className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md" >
                    

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
                                            <div className="flex  justify-center text-xs lg:text-md text-gray-500  tracking-wider uppercase"> Mean Price

                                            </div>   
                                            
                                            {/* Value*/}
                                            
                                            <span className={`flex justify-center mt-2 text-md lg:text-lg font-bold tracking-light `}>{monte_carlo_mean.toFixed(2)}
                                            </span>  
                                        
                                        </div>
                                    </div>

                                    {/* Median Price */}

                                    
                                    <div className={` `} >
                                            
                                            <div className='border-none shadow-none flex flex-col items-start '>

                                            {/* Title*/}  
                                            <div className="flex  justify-center text-xs lg:text-md text-gray-500  tracking-wider uppercase"> Median Price
                                            </div>   
                                            
                                            {/* Value*/}
                                            
                                            <span className={`flex justify-center mt-2 text-md lg:text-lg font-bold tracking-light `}>{monte_carlo_medium.toFixed(2)}
                                            </span>  
                                        
                                        </div>
                                    </div>

                                </div>


                                {/* Min Price & Max Price */}
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">

                                    {/* Min Price */}

                                    
                                    <div className={``} >
                                            
                                            <div className='border-none shadow-none flex flex-col items-start  '>

                                            {/* Title*/}  
                                            <div className="flex  justify-center text-xs lg:text-md text-gray-500  tracking-wider uppercase"> Min Price
                                            </div>   
                                            
                                            {/* Value*/}
                                            
                                            <span className={`flex justify-center mt-2 text-md lg:text-lg font-bold tracking-light `}>{monte_carlo_min.toFixed(2)}
                                            </span>  
                                        
                                        </div>
                                    </div>

                                    {/* Max Price */}

                                    
                                    <div className={``} >
                                            
                                            <div className='border-none shadow-none flex flex-col items-start '>

                                                {/* Title*/}  
                                                <div className="flex  justify-center text-xs lg:text-md text-gray-500  tracking-wider uppercase"> Max Price
                                                </div>   
                                                
                                                {/* Value*/}
                                                
                                                <span className={`flex justify-center mt-2 text-md lg:text-lg font-bold tracking-light `}>{monte_carlo_max.toFixed(2)}
                                                </span>  
                                            
                                            </div>
                                    </div>

                                </div>

                            </div>

                            {/* Probability of Profit Section */}

                            <div className="rounded-2xl shadow-sm  bg-blue-50 border border-blue-200 hover:shadow-md m-4" >
                                <div className="grid grid-cols-2 items-center justify-between p-4 pt-1 pb-1">

                                    <div className="flex items-center gap-2">
                                                                                
                                        <p className="items-center pt-3 pb-3">
                                        
                                        <h2 className="text-gray-700 text-sm font-bold "> Probability of Profit  </h2>
                                        <p className="text-xs lg:text-md text-gray-500  tracking-wider"> Price higher after 30 days</p>   

                                        </p>


                                    </div>
                                    <div className="flex justify-end pr-5 text-blue-500 font-bold text-2xl ">
                                    
                                            <h2>58.00%</h2>
                                    
                                    </div>

                                </div>

                            </div>


                    </div>
                
                </div>
  )
}
