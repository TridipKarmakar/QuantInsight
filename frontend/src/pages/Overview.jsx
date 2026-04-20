
import { useState } from "react";
import TopNavbar from "../layouts/TopNavbar.jsx";
import LeftNavbar from "../layouts/LeftNavbar.jsx";

import HeaderSection from "../components/overview/HeaderSection.jsx";
import StatsSection from "../components/overview/StatsSection.jsx";
import PercentileSection from "../components/overview/PerecntileSection.jsx";



export default function Overview() {

  const [data, setData] = useState(null);

  const fetchData = async (symbol) => {
    const res = await fetch(`https://quantinsight.onrender.com/stock/${symbol}`);
    const json = await res.json();
    setData(json)
  }



  return  (
      <div className="min-h-screen bg-gray-50"> 

        {/*  Left Navbar */}
        <LeftNavbar />

            {/*  TOP Navbar */}
            <TopNavbar className="w-10"  onSearch={fetchData}/>
            
          <div className="pl-30 pt-10 pr-15 space-y-6 bg-gray-50">

              {/*  Header */}
              <HeaderSection data={data} currentSymbol={data?.symbol}/>
              
              { !data && (
                <div className="text-gray-500 text-sm">
                  Search a stock to see analysis
                </div>
              )}

              {/*  Stats */}
              
              { data && < StatsSection data={data} />}
              
              { data && < PercentileSection data={data} />}
              
            </div>
          

      </div>
      
  )
}