def transform_to_mogo_format(symbol, df) :
    records= []

    
    for Date, rows in df.iterrows() :
    
        if isinstance(Date, str):
            formatted_date = Date.split(" ")[0]

        else :
            formatted_date = Date.strftime("%Y-%m-%d")

        records.append({
            "symbol" :symbol,
            "date": formatted_date,
            "open" : float(rows["open"]),
            "high" : float(rows["high"]),
            "low" : float(rows["low"]),
            "close" : float(rows["close"]),
            "volume" : float(rows["volume"]),    
            "close_norm" : float(rows["close_norm"]),
            "return" : float(rows["return"]),
            "pct_change" : float(rows["pct_change"])
        
        })
    
    return records