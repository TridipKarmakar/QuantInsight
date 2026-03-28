from api.market_data import fetch_stock_data
from processing.parse_data import parse_stock_data
from processing.covert_to_dataframe import convert_to_df
from processing.cleaning import time_serise_analysis_dataset
from processing.feature_engineering import time_serise_feature_engineering
from processing.validation import validated_data
from analytics.statistics_engine import compute_all_statistics


from database.mongo import collection
from database.validate import get_latest_date, filter_new_data
from database.save_data import save_stock_data
from processing.transform import transform_to_mogo_format




# def get_stock_analysis(symbol) :

#      data = fetch_stock_data(symbol)  #get the overall stock data
#      time_series = parse_stock_data(data) #get the time series data
#      time_series_data_frame = convert_to_df(time_series) #convert to the dataframe
#      time_series_data_frame = time_serise_analysis_dataset(time_series_data_frame)
#      time_series_data_frame = time_serise_feature_engineering(time_series_data_frame)  # create analysis data
#      validated_data(time_series_data_frame) #validate the data
#      stats = compute_all_statistics(time_series_data_frame)  #Extract the stats out of it 

#      return {
#           "symbol" : symbol ,
#           "stats" : stats,
#           "Data Sets": time_series_data_frame[:10].to_dict(orient="index") , #return only the first 10 records for now
          
#      }


def refresh_stock_data(symbol) :
    
    print(f"Refeshing {symbol}...")

    
    data = fetch_stock_data(symbol) # step 1 - Fetch
    
    time_series = parse_stock_data(data) # step 2 - parse

    time_series_data_frame = convert_to_df(time_series) # step 3 - DataFrame
    
    # step 4 - Process
    time_series_data_frame = time_serise_analysis_dataset(time_series_data_frame)
    
    time_series_data_frame = time_serise_feature_engineering(time_series_data_frame)  

    # Step 5 - Validate
    
    validated_data(time_series_data_frame)

    # Step 6 - DB Check

    latest_data = get_latest_date(collection, symbol)

    
    # Step 7 - Filter

    time_series_data_frame = filter_new_data(time_series_data_frame,latest_data)

    if time_series_data_frame.empty :
        return {"message": "Already up to date"}
    
    # Step 8 - Transform

    records = transform_to_mogo_format(symbol,time_series_data_frame)

    # Step 9 - Save

    save_stock_data(collection, records)

    return {"message" : f"{len(records)} recods inserted"}
    


     
     