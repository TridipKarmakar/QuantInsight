import { ChartNoAxesColumn, ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PriceChart from "../common/PriceCard";
import ReturnCard from "../common/ReturnCard";
import HistoricalTable from "../common/HistoricalTable"


import React, { useState } from 'react';





export default function HistoricalData({ data }) {

  if (!data || data.length == 0) return null

  const [range, setRange] = useState("30D")
  const filterData = (data, range) => {
    const daysMap = {
      "30D": 30,
      "3M": 90,
      "6M": 180,
      "1Y": 365,
      "5Y": 1825,
      "MAX": data.length
    }

    const days = daysMap[range]
    return data.slice(-days)

  }


  const getChartWidth = () => {
    if (range === "30D" || range === "3M") return "100%";
    return chartData.length * 6;
  };


  const chartData = filterData(data.historical_data, range)

  const periodOpen = chartData[0]?.close;
  const periodClose = chartData[chartData.length - 1]?.close;
  const periodReturn = ((periodClose / periodOpen) - 1) * 100;

  const isPositive = periodReturn >= 0



  return (

    <div className="pb-6">

      {/* Historical Section */}
      <div className="mt-10 text-sm  flex items-center  gap-2">

        <ChartNoAxesColumn size={16} className="text-blue-500" />
        <span className=" ml-2 uppercase tracking-wide font-medium text-stone-500" >Historical Data</span>
        <ChevronRight size={13} className="text-gray-400 ml-2" />


      </div>


      {/* Historical Chart */}

      <Card className="shadow-sm mt-6 " >

        <div className="flex justify-between items-start ml-6">

          {/* left */}

          <div>

            <h2 className="flex font-bold text-lg text-gray-500">
              <ChartNoAxesColumn size={22} strokeWidth={3} className="text-blue-500 mr-2" />
              Historical Price & Returns
            </h2>

            <p className="text-sm text-gray-500 mt-1">{chartData.length} trading days</p>
          </div>

          {/* Right */}

          <div className="text-sm text-blue-500 flex gap-4 p-2   justify-center items-cente  rounded-l-lg shadow-sm hover:shadow-md">
            <span>Open:  ₹{chartData[0]?.close.toFixed(2)}</span>
            <span>Close: ₹{chartData[(chartData.length) - 1]?.close.toFixed(2)}</span>
            <span className={`${isPositive ? "text-green-600" : "text-red-500"}`}>{periodReturn.toFixed(2)} % period </span>


          </div>

        </div>


        <CardContent className="space-y-5 " >

          {/* 2. Tabs */}



          <Tabs value={range} onValueChange={setRange} className="" >
            <TabsList className="bg-white p-1 rounded-lg gap-2">

              <TabsTrigger value="30D" className="px-3 py-1.5 text-sm" >30D</TabsTrigger>
              <TabsTrigger value="3M" className="px-3 py-1.5 text-sm">3M</TabsTrigger>
              <TabsTrigger value="6M" className="px-3 py-1.5 text-sm shadow-gray-400">6M</TabsTrigger>
              <TabsTrigger value="1Y" className="px-3 py-1.5 text-sm">1Y</TabsTrigger>
              <TabsTrigger value="5Y" className="px-3 py-1.5 text-sm">5Y</TabsTrigger>
              <TabsTrigger value="MAX" className="px-3 py-1.5 text-sm">MAX</TabsTrigger>

            </TabsList>
          </Tabs>



          <div className="">

            <PriceChart data={chartData} range={range} />

            <div className="flex justify-between items-start ml-6 mb-6">
              {/* left */}

              <div className="flex flex-1 gap-1  justify-center items-center">
                <p className="text-sm text-gray-500 uppercase">Daily Returns</p>

                <div className="flex-1 h-px bg-gray-200" />
                {/* Right */}

                <div className=" text-sm text-gray-500 flex gap-4 items-center justify-center pr-6 ">

                  <div className="flex items-center justify-center  gap-2 h-5 w-20">
                    <div className="bg-red-700 w-2.5 h-3 rounded-sm "></div>
                    <span>Posetive</span>
                  </div>

                  <div className="flex items-center justify-center  gap-2 h-5 w-20">
                    <div className="bg-green-700 w-2.5 h-3 rounded-sm "></div>
                    <span>Negetive</span>
                  </div>

                </div>
              </div>
            </div>



            <ReturnCard data={chartData} range={range} />

          </div>

        </CardContent>

      </Card>
      
    <HistoricalTable data={chartData} tradingDays={chartData.length} />

    </div>
  )
}
