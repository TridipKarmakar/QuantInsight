from database.mongo import collection
from database.read_data import get_stock_dataframe
from analytics.statistics_engine import compute_all_statistics


def get_stock_analysis_from_db(symbol) :
    df = get_stock_dataframe(collection, symbol)
    if df is None:
        return {"error" : "No data found"}
    
    stats = compute_all_statistics(df)

    return {
        "symbol" : symbol,
        "stats" : stats
    }