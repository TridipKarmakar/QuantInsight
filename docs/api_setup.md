# Alpha Vantage API Setup

## Overview

QuantInsight retrieves financial market data using the Alpha Vantage API.  
This API provides real-time and historical market data for stocks, forex, and other financial instruments.

The API returns responses in JSON format, which can be processed using Python.

---

## Base URL

All API requests are sent to the following endpoint:

https://www.alphavantage.co/query

---

## Authentication

Alpha Vantage requires an API key for authentication.

The API key is stored securely in the `.env` file.

Example:

ALPHA_VANTAGE_API_KEY=your_api_key_here

---

## Required Parameters

| Parameter | Description |
|----------|-------------|
| function | Specifies the API function (type of data requested) |
| symbol | Stock ticker symbol |
| apikey | Your Alpha Vantage API key |

---

## Example API Request

Example request for daily stock data:

https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=YOUR_API_KEY

---

## Important API Functions

| Function | Description |
|---------|-------------|
| TIME_SERIES_DAILY | Daily stock price data |
| TIME_SERIES_INTRADAY | Intraday stock price data |
| GLOBAL_QUOTE | Latest stock price |
| SYMBOL_SEARCH | Search for stock symbols |

---

## Example JSON Response Structure

The API returns data in JSON format.

Example:
{
"Meta Data": {...},
"Time Series (Daily)": {
"2024-03-10": {
"1. open": "170.20",
"2. high": "172.10",
"3. low": "169.80",
"4. close": "171.40",
"5. volume": "32000000"
}
}
}


---

## Usage in QuantInsight

The API will be used to:

1. Retrieve historical stock price data
2. Convert JSON responses to Pandas DataFrames
3. Perform statistical analysis
4. Apply probability models
5. Run Monte Carlo simulations

---

## Rate Limits

Alpha Vantage free tier allows:

- 5 API requests per minute
- 500 requests per day

Requests should be handled carefully to avoid hitting the rate limit.

---

## Next Steps

After completing the API study:

1. Build API request module
2. Fetch market data
3. Parse JSON response
4. Convert data to Pandas DataFrame
