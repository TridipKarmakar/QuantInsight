from analytics.correlation_matrix import compute_correlation_matrix
from service.multi_stock_service import get_multi_stock_df


def get_correlation(symbols):

    if len(symbols) < 2 :
        return {"error" : "At least 2 symbols required"}
    
    df = get_multi_stock_df(symbols)

    corr_matrix = compute_correlation_matrix(df)


    return {
        "symbol" : symbols,
        "correlation_matrix" : corr_matrix.values.tolist()
    }