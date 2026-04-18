
import { useState }  from 'react'


export default function HeaderSection({ data, currentSymbol }) {

    const price = data?.current_price || 0
    const todayReturn = data?.today_return || 0
    

    return(

        <div className="flex items-center justify-between border-b pb-4">
       
        {/*Left*/}
        
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    {currentSymbol || " Search Stock Name "}</h1>
                
                <p className="text-sm text-gray-500 mt-1">
                 Last updated: {new Date().toLocaleString()}
                </p>
            </div>
            
            {/*Right*/}
            
            <div className="text-right">

                {/* Price */}
                <h2 className='text-3xl font-bold'>
                     $ {price.toLocaleString()}
                </h2>
              
                {/* Today Return */}
                
                <p>
                    <span>{}</span>
                    <span></span>

                </p>

            </div>
        </div>
        
    )
}