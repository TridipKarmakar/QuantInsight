from api.market_data import fetch_stock_data
from processing.validation import validated_data
from processing.cleaning import time_serise_analysis_dataset

from processing.feature_engineering import time_serise_feature_engineering

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
       
        time_series_data_frame = time_serise_analysis_dataset(time_series_data_frame)  # execute the cleaning process

        time_series_data_frame = time_serise_feature_engineering(time_series_data_frame)  # execute the feature engineering process

        print("Parsing successfully ✅")
        print(time_series_data_frame[:10])
        
        validated_data(time_series_data_frame) #validate the data
        
    except Exception as e:
        print("Error:", e)
    

        