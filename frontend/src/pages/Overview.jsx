
import { BeatLoader } from "react-spinners";
import { useState } from "react";
import TopNavbar from "../layouts/TopNavbar.jsx";
import LeftNavbar from "../layouts/LeftNavbar.jsx";


import HeaderSection from "../components/overview/HeaderSection.jsx";
import StatsSection from "../components/overview/StatsSection.jsx";
import PercentileSection from "../components/overview/PerecntileSection.jsx";

import MarketInsightsSection from "../components/overview/MarketInsightsSection.jsx";
import ProbabilityInsight from "../components/analysis/ProbabilityInsight.jsx";





export default function Overview() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (symbol) => {

    try {

      setLoading(true)
      

      const res = await fetch(`https://quantinsight.onrender.com/stock/${symbol}`);
      const json = await res.json();
      setData(json)      

    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }

  }




  return  (
      <div className={`min-h-screen bg-gray-50`}> 
      <div className={`${loading ? "opacity-50 pointer-events-none" : "opacity-100"} transition-opacity duration-300`} >
        {/*  Left Navbar */}
        <LeftNavbar />

        {/*  TOP Navbar */}
        <TopNavbar className="w-10"  onSearch={fetchData} loading={loading}/>
            
          <div className="pl-90 pt-10 pr-80 space-y-6 bg-gray-50 ">

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
              
              { data && < MarketInsightsSection data={data} />}

              { data && < ProbabilityInsight data={data} />}




            </div>
          </div>





          {loading && (
          <div className=" fixed top-100 right-100 z-50 bg-white px-3 py-2 rounded-lg shadow border border-gray-200 flex items-center gap-2">
            
          <span className="text-sm text-blue-900
           font-bold">Fetching data </span>
           
          <BeatLoader className=" " color="#1F51FF" size={5} />
        
          </div>
        )}

      </div>
      
  )
}