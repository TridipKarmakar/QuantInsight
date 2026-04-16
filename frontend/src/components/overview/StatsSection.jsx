
import StatCard from "../common/StatCard";

import React from 'react'

export default function StatsSection({data}) {
  
  
  return (
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 ">

        <StatCard title="Mean Return" value={data.stats.mean}/>
        <StatCard title="Median Return" value={data.stats.median}/>
        <StatCard title="STD Return" value={data.stats.std_dev}/>
        <StatCard title="Variance" value={data.stats.variance}/>
        <StatCard title="Min Return" value={data.stats.min}/>
        <StatCard title="Max Return" value={data.stats.max}/>
    </div>
    
    
  )
}
