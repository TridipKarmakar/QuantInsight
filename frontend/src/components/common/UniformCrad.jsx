import React from 'react'


export default function UniformCard({data}) {
  
 
  const min_return = (data?.uniform.range["min_return"] || 0)
  const max_return = (data?.uniform.range["max_return"]  || 0)
  const range = (data?.uniform.range["range"] || 0)
  const prob_0_to_2_percentage = (data?.uniform["prob_0_to_2_percentage"] || 0)
 


  
  return (

    <div> 
 
                            
                {/* Probability Insights */}

                    <div className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md h-full" >
                    

                        <div className="p-4 pt-1 pb-1">

                            <div className="flext items-center">
                    
                                <h2 className="flex items-center  font-bold text-sm text-blue-500 mt-1 gap-2 ">
                                    U(a,b) <p className = "text-black">Uniform</p>

                                </h2>

                                <h2 className="text-gray-500 pt-2 mb-4 text-sm">Uniform distribution assumption </h2>

                            </div>

                            
                            
                            <div className="grid grid-cols-1 gap-1 pb-4">

                                {/* Min Return */}

                                
                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start'>

                                        {/* Title*/}  
                                        <div className="flex justify-start items-center text-xs lg:text-md text-gray-500  tracking-lighter text-balance whitespace-nowrap mt-2 "> Min return
                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-end items-center mt-2 text-xs font-bold tracking-light`}>{((min_return*100).toFixed(2))}
                                        </span>  
                                    
                                    </div>
                                </div>

                                {/* Max Return */}

                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start'>

                                        {/* Title*/}  
                                        <div className="flex justify-start items-center text-xs lg:text-md text-gray-500  tracking-lighter text-balance whitespace-nowrap mt-2 "> Max return

                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-end items-center mt-2 text-xs  font-bold tracking-light `}>{((max_return * 100).toFixed(2))>0 ? "+" + ((max_return * 100).toFixed(2)) :(max_return * 100).toFixed(2) }  %
                                        </span>  
                                    
                                    </div>
                                </div>

                                 {/* Range */}

                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start  '>

                                        {/* Title*/}  
                                        <div className="flex  justify-start items-center text-xs lg:text-md text-gray-500  tracking-wider mt-2 "> Range

                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-end items-center mt-2 text-xs font-bold tracking-light `}>{(range * 100).toFixed(2) > 0 ? "+" + (range * 100).toFixed(2): (range * 100).toFixed(2) } %
                                        </span>  
                                    
                                    </div>
                                </div>

                                 {/* P(0% to 2%) */}

                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start'>

                                        {/* Title*/}  
                                        <div className="flex  justify-start items-center text-xs lg:text-md text-gray-500  tracking-wider mt-2 "> P(0% to 2%)

                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-end items-start mt-2 text-xs font-bold tracking-light text-blue-500`}>{(prob_0_to_2_percentage * 100).toFixed(2)} %
                                        </span>  
                                    
                                    </div>
                                </div>

                          








                            </div>

                        </div>
                    </div>

                            
    </div>
  )
}
