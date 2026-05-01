import React from 'react'


export default function BinomialCard({data}) {
  
 
  const three_up_in_five_days = (data?.binomial["3_up_in_5_days"] || 0)
  const all_five_days_up = (data?.binomial["5_up_in_5_days"] || 0)
 


  
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

                                {/* 3 up in 5 Days */}

                                
                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start  '>

                                        {/* Title*/}  
                                        <div className="flex  justify-center text-xs lg:text-md text-gray-500  tracking-wider mt-1 "> P(exactly 3↑ in 5 days)
                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center mt-2 text-sm text-blue-500 font-bold tracking-light `}>{(three_up_in_five_days.toFixed(2)) * 100} %
                                        </span>  
                                    
                                    </div>
                                </div>

                                {/* All 5 days up */}

                                <div className={` `} >
                                        
                                    <div className='border-none shadow-none grid grid-cols-2 items-start  '>

                                        {/* Title*/}  
                                        <div className="flex  justify-start items-center text-xs lg:text-md text-gray-500  tracking-wider mt-2 "> P(all 5 days ↑)
                                        </div>   
                                        
                                        {/* Value*/}
                                        
                                        <span className={`flex justify-center items-center mt-2 text-sm font-bold tracking-light `}>{(all_five_days_up.toFixed(2)) * 100} %
                                        </span>  
                                    
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                            
    </div>
  )
}
