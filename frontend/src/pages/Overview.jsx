
import { useState } from "react";
import HeaderSection from "../components/overview/HeaderSection";
import StatsSection from "../components/overview/StatsSection";

export default function Overview() {

  const [data, setData] = useState(null);

  const fetchData = async (symbol) => {
    const res = await fetch(`https://quantinsight.onrender.com/stock/${symbol}`);
    const json = await res.json();
    setData(json)
  }



  return  (
      
        <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
          
          {/*  Header */}
          <HeaderSection onSearch={fetchData} currentSymbol={data?.symbol}/>
          
          { !data && (
            <div className="text-gray-500 text-sm">
              Search a stock to see analysis
            </div>
          )}

          {/*  Stats */}
          
          { data && < StatsSection data={data} />}
          
        </div>
          

      
  )
}