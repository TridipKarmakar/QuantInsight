import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Database, ChartNoAxesColumn } from "lucide-react";
import { Card } from "../ui/card";
import React from "react";



export default function HistoricalTable({chartData, tradingDays}) {

    return (
        
        <div className="flex justify-between items-start ml-6">

          {/* left */}

          <div>

            <h2 className="flex font-bold text-lg text-gray-500">
              <ChartNoAxesColumn size={22} strokeWidth={3} className="text-blue-500 mr-2" />
              Historical Price & Returns
            </h2>

            <p className="text-sm text-gray-500 mt-1">{tradingDays} trading days</p>
          </div>

        </div>

    )
}

