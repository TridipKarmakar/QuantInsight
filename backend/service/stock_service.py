from processing.parse_data import parse_stock_data
from api.market_data import fetch_stock_data
from processing.validation import validated_data
from processing.cleaning import time_serise_analysis_dataset
from processing.feature_engineering import time_serise_feature_engineering
from processing.covert_to_dataframe import convert_to_df
from analytics.statistics_engine import compute_all_statistics


def get_stock_analysis(symbol) :

     data = fetch_stock_data(symbol)  #get the overall stock data
     time_series = parse_stock_data(data) #get the time series data
     time_series_data_frame = convert_to_df(time_series) #convert to the dataframe
     time_series_data_frame = time_serise_analysis_dataset(time_series_data_frame)
     time_series_data_frame = time_serise_feature_engineering(time_series_data_frame)  # create analysis data
     validated_data(time_series_data_frame) #validate the data
     stats = compute_all_statistics(time_series_data_frame)  #Extract the stats out of it 

     return {
          "symbol" : symbol ,
          "stats" : stats,
          "Data Sets": time_series_data_frame[:10].to_dict(orient="index") , #return only the first 10 records for now
          
     }





     
     