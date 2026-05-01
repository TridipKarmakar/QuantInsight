import React from 'react'


export default function GeometricCard({data}) {
  
  const prob_1_day =  (data?.geometric["prob_1_day"]||0)
  const prob_2_day =  (data?.geometric["prob_2_day"]||0)
  const prob_3_day =  (data?.geometric["prob_3_day"]||0)
  const exoected_days_for_gain =  (data?.geometric["exoected_days_for_gain"]||0)
  


  
  return (

    <div> 
 
                            
                {/* Probability Insights */}

                    <div className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md h-full" >
                    

                        <div className="p-4 pt-1 pb-1">

                            <div className="flext items-center">
                    
                                <h2 className="flex items-center  font-bold text-sm text-blue-500 mt-1 gap-2 ">
                                     Geo(p) <p className = "text-black">Geometric</p>

                                </h2>

                                <h2 className="text-gray-500 pt-2 mb-4 text-sm">Days until first positive return</h2>

                            </div>

                            
                            
                            <div className="grid grid-cols-1 gap-1 pb-4">

                                {/* P(gain on day 1) */}

                                
                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start'>

                                        {/* Title*/}  
                                        <div className="flex  justify-start items-center text-xs lg:text-md text-gray-500  tracking-lighter text-balance whitespace-nowrap mt-2 "> P(gain on day 1)
                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-end text-blue-500 items-center mt-2 text-xs font-bold tracking-light  `}>{(prob_1_day * 100).toFixed(2)} %
                                        </span>  
                                    
                                    </div>
                                </div>

                                {/* P(gain on day 2) */}

                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start  '>

                                        {/* Title*/}  
                                        <div className="flex  justify-start items-center text-xs lg:text-md text-gray-500  tracking-wider mt-2 "> P(gain on day 2)


                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-end items-center mt-2 text-xs font-bold tracking-light `}>{(prob_2_day * 100).toFixed(2)} %
                                        </span>  
                                    
                                    </div>
                                </div>

                                {/* P(gain on day 3) */}

                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start  '>

                                        {/* Title*/}  
                                        <div className="flex  justify-start items-center text-xs lg:text-md text-gray-500  tracking-wider mt-2 "> P(gain on day 3)


                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-end items-center mt-2 text-xs font-bold tracking-light `}>{(prob_3_day * 100).toFixed(2)} %
                                        </span>  
                                    
                                    </div>
                                </div>

                                

                            </div>

                            

                            <div className="border-t border-dashed " > 
                                <span className="flex justify-start items-center mt-2 text-xs text-gray-500 tracking-light" > Expected wait: {(exoected_days_for_gain).toFixed(2)} days</span>
                            </div>


                        </div>
                    </div>

                            
    </div>
  )
}
