import os 
import requests
from dotenv import load_dotenv
import pandas as pd

load_dotenv()

API_KEY = os.getenv("ALPHA_VANTAGE_API_KEY") #get API key from env file

BASE_URL = "https://www.alphavantage.co/query" #base url for api

def fetch_stock_data(symbol):
    
    """
    Fetch daily stock data from Alpha API
    """

    
    params = {
        "function" : "TIME_SERIES_DAILY",
        "symbol": symbol,
        "apikey" : API_KEY 
    }

    response = requests.get(BASE_URL, params=params)
    
    if response.status_code != 200 :
        raise Exception("API request dailed")

    return response.json()