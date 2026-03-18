from api.market_data import fetch_stock_data

if __name__ == "__main__" :

    symbol = "AAPL"

    try:
        data = fetch_stock_data(symbol)
        print("Data fetched successfully ✅")
        print(data.keys())

    except Exception as e:
        print("Error:", e)
    

        