import { Input } from "@/components/ui/input.jsx"
import { useState } from "react"
import { Search, Server } from "lucide-react"


export default function LeftNavbar({ onSearch }) {

    const [symbol, setSymbol] = useState("") 
   
    const handleSearch = (e) => {
        if (e.key == "Enter" && symbol) {
            onSearch(symbol.toUpperCase())
        }
    }
    return (
        <div className="fixed top-0 left-0 flex flex-col items-center h-screen py-4 z-40 w-16 border-r bg-white">
            
            

    
        </div>
    )

}