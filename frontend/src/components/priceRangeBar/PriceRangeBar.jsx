export default function PriceRangebar({mc}) {
    if (!mc) return null

    const min = mc.min_price
    const max = mc.max_price

    const p5 = mc.percentiles["5%"]
    const p25 = mc.percentiles["25%"]
    const p75 = mc.percentiles["75%"]
    const p95 = mc.percentiles["95%"]

    // Normalize position (0 → 100%)
    const getPosition = (value) => ((value - min) / (max - min)) * 100
    
    const mid = getPosition((p25 +  p75) / 2)


    return(
        <div className="m-4">
            
            {/* Header */}
            <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Span Price range</span>
                <span>
                    ₹{min.toLocaleString()} — ₹{max.toLocaleString()}
                </span>
            </div>

            {/* Bar */}
            <div className="relative h-2 bg-gray-200 rounded-full">
                
                {/* Highlight (25%-75%) */}
                <div

                    className="absolute h-2 bg-blue-200 rounded-full"
                    style={{
                        left: `${getPosition(p25)}%`,
                        width: `${getPosition(p75) - getPosition(p25)}%`
                    }}
                />
                {/* Marker */}
                
                <div 
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-2 bg-blue-600 rounded-full"
                    style={{ left: `${mid}%` }}
                >
                </div>
                </div>
                
                

                {/* Percentiles */}
                <div className="flex justify-between text-xs text-gray-500 mt-3">
                    <span>5%: ₹{p5.toLocaleString()}</span>
                    <span>25%: ₹{p25.toLocaleString()}</span>
                    <span>75%: ₹{p75.toLocaleString()}</span>
                    <span>95%: ₹{p95.toLocaleString()}</span>

                </div>
                    
        
        </div> 
    )   
}