import {AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid  } from "recharts"




export default function ReturnCard({data,range}) {

    // const withMA = data.map((item, index, arr) => {
    //   const period = 10; // you can change (10, 20, 50)

    //     if (index < period) return { ...item, ma: null };

    //     const avg =
    //         arr.slice(index - period, index)
    //         .reduce((sum, d) => sum + d.close, 0) / period;

    //     return { ...item, ma: avg };
    // });


    
    
    
    const getInterval = () => {
        if (range === "30D") return 1;   // show every 5th label
        if (range === "3M") return 5;
        if (range === "6M") return 7;
        if (range === "1Y") return 7;
        if (range === "5Y") return 7;
        if (range === "MAX") return 7;
            
    };


    const formatCurrency = (value) => {
        if (value >= 1000000) return `₹${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `₹${(value / 1000).toFixed(1)}K`;
        return `₹${value}`; };

    if (!data || data.length == 0) return null

    return(
        <div className="h-75 w-full">

           

                     
                <div >
                    <div >
                                    
                        <AreaChart   width={1250}  height={300} data={data} >

                                                
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
                                    
                                interval={getInterval()}
                                tick={{ fontSize: 12, fill: "#6b7280" }}
                                axisLine={false}
                                tickLine={false}
                                padding={{ left: 20 }}
                                    
                                    
                                    />
                            <YAxis domain={['auto', 'auto'] }  
                                 
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

                            
                            {/* <Area
                                type="monotone"
                                dataKey="ma"
                                stroke="#f59e0b"   // orange line
                                fill="none"
                                strokeWidth={2}
                                dot={false}
                                /> */}





                        </AreaChart>

                    </div>
                </div>

            




        </div>
    )
}