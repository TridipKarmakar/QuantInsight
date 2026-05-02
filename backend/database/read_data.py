import pandas as pd 

def get_stock_dataframe(collection, symbol) :
    data = list(collection.find({"symbol" :symbol }))

    if not data :
        return None
    
    historical_data = list(collection.find({"symbol" :symbol }, {"_id":0,"date":1,"close":1,"return":1}).sort("date",1))
    
    print(historical_data)
    df = pd.DataFrame(data)

    df["date"] = pd.to_datetime(df["date"])
    df = df.sort_values("date")

    df.set_index("date", inplace=True)

    return df,historical_data


