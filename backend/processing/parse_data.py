
def parse_stock_data(data) :
    """
    Extract time serise data from API response
    """

    if "Time Series (Daily)" not in data:
        raise Exception("Time Series data not found in API response")
    
    return data["Time Series (Daily)"]