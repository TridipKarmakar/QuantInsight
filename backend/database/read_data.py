import pandas as pd 

def get_stock_dataframe(collection, symbol) :
    data = list(collection.find({"symbol" :symbol }))

    if not data :
        return None
    df = pd.DataFrame(data)

    df["date"] = pd.to_datetime(df["date"])
    df = df.sort_values("date")

    df.set_index("date", inplace=True)

    return df


