import { Input } from "@/components/ui/input.jsx" 
import { Button } from "@/components/ui/button.jsx" 
import { useState }  from 'react'


export default function HeaderSection({ onSearch, currentSymbol }) {
    const [symbol, setSymbol] = useState("")

    const handleSearch = () => {
        if (!symbol) return
        onSearch(symbol.toUpperCase())
    }


    return(

        <div className="flex items-center justify-between border-b pb-4">
        {/*Left*/}
        
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{currentSymbol || " AAPL "}</h1>
                
                <p className="text-sm text-gray-500 mt-1">
                 Last updated: {new Date().toLocaleString()}
                </p>
            </div>
            
            {/*Right*/}
            
            <div className="flex items-center gap-2">

                

            </div>
        </div>
        
    )
}