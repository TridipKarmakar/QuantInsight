import React from 'react'


export default function PoissonCard({data}) {
  
 
  const labda = (data?.poission_2_percent["lambda"] || 0)
  const zero_events = (data?.poission_2_percent["0_events"] || 0)
  const one_events = (data?.poission_2_percent["1_events"] || 0)
  const two_plus_events = (data?.poission_2_percent["2_events"] || 0)
 


  
  return (

    <div> 
 
                            
                {/* Probability Insights */}

                    <div className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md h-full" >
                    

                        <div className="p-4 pt-1 pb-1">

                            <div className="flext items-center">
                    
                                <h2 className="flex items-center  font-bold text-sm text-blue-500 mt-1 gap-2 ">
                                    Poi(λ) <p className = "text-black">Poisson</p>

                                </h2>

                                <h2 className="text-gray-500 pt-2 mb-4 text-sm">Extreme negative events (return {`<`} -2%) </h2>

                            </div>

                            
                            
                            <div className="grid grid-cols-1 gap-4 pb-4">

                                {/* Lambda */}

                                
                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start  '>

                                        {/* Title*/}  
                                        <div className="flex  justify-start items-center text-xs lg:text-md text-gray-500  tracking-wider mt-2 "> Lambda (λ)
                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center mt-2 text-sm font-bold tracking-light `}>{(labda.toFixed(2))}
                                        </span>  
                                    
                                    </div>
                                </div>

                                {/* P(0 events) */}

                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start  '>

                                        {/* Title*/}  
                                        <div className="flex  justify-start items-center text-xs lg:text-md text-gray-500  tracking-wider mt-2 "> P(0 events)

                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center items-center mt-2 text-sm font-bold tracking-light `}>{(zero_events.toFixed(2)) * 100} %
                                        </span>  
                                    
                                    </div>
                                </div>

                                 {/* P(1 events) */}

                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start  '>

                                        {/* Title*/}  
                                        <div className="flex  justify-start items-center text-xs lg:text-md text-gray-500  tracking-wider mt-2 "> P(1 events)

                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center items-center mt-2 text-sm font-bold tracking-light `}>{(one_events.toFixed(2)) * 100} %
                                        </span>  
                                    
                                    </div>
                                </div>

                                 {/* P(2+ events) */}

                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start  '>

                                        {/* Title*/}  
                                        <div className="flex  justify-start items-center text-xs lg:text-md text-gray-500  tracking-wider mt-2 "> P(2+ events)

                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center items-center mt-2 text-sm font-bold tracking-light `}>{(two_plus_events.toFixed(2)) * 100} %
                                        </span>  
                                    
                                    </div>
                                </div>

                          








                            </div>

                        </div>
                    </div>

                            
    </div>
  )
}
