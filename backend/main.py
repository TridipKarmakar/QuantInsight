from api.market_data import fetch_stock_data
import pandas as pd

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

        time_series_data_frame = pd.DataFrame(time_series).T

        time_series_data_frame = time_series_data_frame.rename(columns={
            "1. open" :"Open",
            "2. high" :"High" ,  
            "3. low"  :"Low" , 
            "4. close" :"Close"  ,
            "5. volume" : "Volume" })

        time_series_data_frame = time_series_data_frame.astype({"Open":float,"High":float,"Low":float,"Close":float,"Volume":int}).round(2)

        time_series_data_frame.index = pd.to_datetime(time_series_data_frame.index)

        time_series_data_frame = time_series_data_frame.sort_index(ascending=False)
        time_series_data_frame.reset_index(inplace=True)
        time_series_data_frame.rename(columns={"index":"Date"},inplace=True)
        time_series_data_frame = time_series_data_frame.set_index("Date")

        
        print("Parsing successfully ✅")
        print(time_series_data_frame[:5])

    except Exception as e:
        print("Error:", e)
    

        