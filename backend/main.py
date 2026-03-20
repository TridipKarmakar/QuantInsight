from api.market_data import fetch_stock_data
import pandas as pd

def parse_stock_data(data) :
    """
    Extract time serise data from API response
    """

    if "Time Series (Daily)" not in data:
        raise Exception("Time Series data not found in API response")
    
    return data["Time Series (Daily)"]


def validated_data(df) :
    """
    Validated stock data
    """

    print("\n --- Data Info ---")
    print(df.info())

    print("\n --- Summary Statistics ---")
    describe_data = df.describe()
    describe_data = describe_data.astype(float).round(4)
    describe_data["volume"] =  describe_data["volume"].astype(int)
    print(describe_data)

    print("\n --- Missing Value found ---")
    print(df.isnull().sum())



    #Logical Checks

    if df.isnull().sum().sum() > 0 :
        raise Exception("Missing values found")
    
    print("\n Data validation successful ✅")





if __name__ == "__main__" : #only run when explicitly run by the name main.py

    symbol = "AAPL" # for now fixed th symbol name lateron change from the browser

    try:
        data = fetch_stock_data(symbol)  #get the overall stock data 
        time_series = parse_stock_data(data) #get the time series data 

        time_series_data_frame = pd.DataFrame(time_series).T
        
        """
        Data Cleaning process
        """
        time_series_data_frame = time_series_data_frame.copy()              #copy this dataset so that for delink the referance 

        time_series_data_frame = time_series_data_frame.drop_duplicates()  #drop the duplicate value

        time_series_data_frame = time_series_data_frame.dropna()           #drop the missing value KAN-39


        time_series_data_frame = time_series_data_frame.rename(columns={                            
            "1. open" :"open",
            "2. high" :"high" ,  
            "3. low"  :"low" , 
            "4. close" :"close"  ,
            "5. volume" : "volume" })       #rename the column

        time_series_data_frame = time_series_data_frame.astype({"open":float,"high":float,"low":float,"close":float,"volume":int}).round(2)      #reasign the data type and round it by 2

        time_series_data_frame.index = pd.to_datetime(time_series_data_frame.index) #set index value as date time


        time_series_data_frame = time_series_data_frame.sort_index(ascending=False)    # sorted the index
        time_series_data_frame.reset_index(inplace=True)
        time_series_data_frame.rename(columns={"index":"Date"},inplace=True) #change the index name as date 
        time_series_data_frame = time_series_data_frame.set_index("Date") #set this cloumn as date time 
        
        time_series_data_frame["close_norm"] = (time_series_data_frame["close"] /  time_series_data_frame["close"].max()).astype(float).round(2)  #normalized this stock value KAN-40 

        time_series_data_frame["retuens"] = (time_series_data_frame["close"].pct_change()).astype(float).round(4) #calculatethe daily return KAN-41

        time_series_data_frame["pct_change"] = (time_series_data_frame["close"].pct_change() * 100).astype(float).round(2) #calculate the percentage chnage

        print("Parsing successfully ✅")
        print(time_series_data_frame[:10])
        validated_data(time_series_data_frame)
    except Exception as e:
        print("Error:", e)
    

        