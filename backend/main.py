from api.market_data import fetch_stock_data

def parse_stock_data(data) :
    """
    Extract time serise data from API response
    """

    if "Time Series (Daily)" not in data:
        raise Exception("Time Series data not found in API response")
    
    return data["Time Series (Daily)"]


if __name__ == "__main__" : #only run when explicitly run by the name main.py

    symbol = "AAPL" # for now fixed th symbol name lateron change from the browser

    try:
        data = fetch_stock_data(symbol)  #get the overall stock data 
        time_series = parse_stock_data(data) #get the time series data 
        
        print("Parsing successfully ✅")
        print(list(time_series.keys())[:5])

    except Exception as e:
        print("Error:", e)
    

        