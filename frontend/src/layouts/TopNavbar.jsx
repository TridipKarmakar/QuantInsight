import { Input } from "@/components/ui/input.jsx"
import { useState } from "react"
import { Search, Server } from "lucide-react"


export default function TopNavbar({ onSearch }) {

    const [symbol, setSymbol] = useState("") 
   
    const handleSearch = (e) => {
        if (e.key == "Enter" && symbol) {
            onSearch(symbol.toUpperCase())
        }
    }
    return (
        <div className="fixed w-full top-0 z-50 flex items-center justify-between  px-6 py-3 border-b bg-white">
            
            {/* Left */}

            <div className="flex items-center gap-3">
                <div className="w-7 lg:w-8  h-7 lg:h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                    ∿
                </div>
                
                <span className="font-semibold text-sm md:text-lg">Quant Insight</span>
            </div>


            {/* Center (search)*/}
            <div className="relative mx-7 flex-1 max-w-30 sm:max-w[200px] md:max-w-75">

                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"/>

                <Input
                    placeholder='Search symbol...'
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    onKeyDown={handleSearch}
                    className="pl-9 h-10 rounded-full bg-gray-50 border border-gray200 shadow-sm focus:ring-2 focus:ring-blue-500"
                />
            </div>           

            {/* Right (tabs placeholder) */}
            <div className="hidden md:flex items-center ml-4 gap-6 text-sx text-gray-600">
                <span className="font-medium text-blue-600 border-b-2 border-blue-600 pb-1">Overview</span>
                <span>Analysis</span>
                <span>Distribution</span>
                <span>Historical Data</span>

            </div>            
            
            {/* Right (tabs placeholder) */}
            <div className="hidden  lg:flex ml-5  items-center justify-center gap-2 text-xs text-gray-500">
                <Server size={16}/>
                <span>Client-side</span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>

        </div>
    )

}