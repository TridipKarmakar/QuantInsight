# Alpha Vantage API Notes

## Base URL
https://www.alphavantage.co/query

## Required Parameters
- function
- symbol
- apikey

## Example API Request

https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=YOUR_KEY

## Important Endpoints

TIME_SERIES_DAILY → Daily stock prices  
TIME_SERIES_INTRADAY → Intraday stock prices  
GLOBAL_QUOTE → Latest stock price  

## Response Format

The API returns data in JSON format containing time series market data.