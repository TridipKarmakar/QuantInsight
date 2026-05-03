import {AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid  } from "recharts"


export default function PriceChart({data,}) {

    const formatCurrency = (value) => {
        if (value >= 1000000) return `₹${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `₹${(value / 1000).toFixed(1)}K`;
        return `₹${value}`; };

    if (!data || data.length == 0) return null

    return(
        <div className="h-75 w-full">

           

                     
                <div style={{ overflowX: "auto", width: "100%" }}>
                    <div style={{ width: data.length * 6, height: 300 }}>
                                    
                        <AreaChart   width={data.length * 100}  height={300} data={data} >

                                                
                        {/* Gradient */}
                            <defs>
                                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.4}/>
                                <stop offset="100%" stopColor="#2563eb" stopOpacity={0}/>
                                </linearGradient>
                            </defs>

                            
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            
                            
                            {/* Axes */}
                            
                            <XAxis 
                                dataKey="date"
                                tickFormatter={(date) => 
                                    
                                    new Date(date).toLocaleDateString("en-IN", {

                                        month: "short",
                                        day: "numeric"

                                    }) 
                                }
                                    
                                tick={{ fontSize: 12, fill: "#6b7280" }}
                                axisLine={false}
                                tickLine={false}
                                    
                                    
                                    />
                            <YAxis domain={['auto', 'auto']} 
                                tickFormatter={formatCurrency}
                                tick={{ fontSize: 12, fill: "#6b7280" }}
                                axisLine={false}
                                tickLine={false}
                            />
                            
                            {/* Tooltip */}
                            
                            <Tooltip formatter={(value) => `₹ ${value.toFixed(2)}`}/>
                            
                            
                            {/* Area Line */}
                            
                            <Area
                                    type="monotone"
                                    dataKey="close"
                                    stroke="#2563eb"
                                    fill="url(#colorPrice)"
                                    strokeWidth={2}
                                    dot={false}
                                />







                        </AreaChart>

                    </div>
                </div>

            




        </div>
    )
}