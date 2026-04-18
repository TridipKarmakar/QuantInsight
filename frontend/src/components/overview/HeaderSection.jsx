import { ArrowUpRight, ArrowDownRight, House, ChevronRight, Clock4  } from "lucide-react";

export default function HeaderSection({ data, currentSymbol }) {

    const price = data?.current_price || 0
    const todayReturn = data?.today_return || 0
    const isPositive = todayReturn >= 0

    return(

        <div className="flex items-center justify-between border-b pu-10 pb-10">
       
        {/*Left*/}



            <div>
                <div className="mt-10 mb-5 text-sm  flex items-center  gap-2">

                    <House size={16} className="text-blue-500"/>
                
                    <span className=" ml-2 uppercase tracking-wide font-medium text-stone-500" >Overview</span>
                    <ChevronRight size={13} className="text-gray-400 ml-2"/>
                </div>



                <h1 className="text-3xl font-bold tracking-tight">
                    {currentSymbol || " Search Stock Name "}</h1>
                
                <div className="flext items-center">
                    

                    <p className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock4 size={16} className="mr-2"/> Last updated: {new Date().toLocaleString()}
                    </p>

                </div>
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