// import { ArrowUpRightCircle }  from "iconoir-react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function HeaderSection({ data, currentSymbol }) {

    const price = data?.current_price || 0
    const todayReturn = data?.today_return || 0
    const isPositive = todayReturn >= 0

    return(

        <div className="flex items-center justify-between border-b pu-10 pb-10">
       
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
                
                <p className={`mt-1 text-md font-medium flex items-center justify-end gap-1 ${isPositive ? "text-green-600" : "text-red-500"}`}>

                    {isPositive ? (<ArrowUpRight/>):(<ArrowDownRight />)}
                    <span>{isPositive ? "+":"-"}{todayReturn.toFixed(2)}%</span>
                    <span>Today</span>

                </p>

            </div>
        </div>
        
    )
}