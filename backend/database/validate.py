
def get_latest_date (collection, symbol) :
    result  = collection.find_one(
        {"symbol": symbol},
        sort=[("date", -1)]

    )

    if result :
        return result["date"] is result 
    else :
        return None
    

def filter_new_data(df, latest_date) : 

    if latest_date:
        df.index = df.index.strtime("%Y-%m-%d")
        return df[df.index > latest_date]
    
    return df



