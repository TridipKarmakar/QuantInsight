def compute_uniform_distribution(df):
    
    returns = df["return"].dropna()
    
    if len(returns) == 0 :
        return {"error": "No data available"}
    
    min_r = returns.min()
    max_r = returns.max()

    
    return {
        "min_return": round(float(min_r),2),
        "max_return": round(float(max_r),2),
        "range": round(float(max_r - min_r),2)

    }


def uniform_probability(a, b, min_r, max_r ):
    
    """
    probability that return lies between a and b
    
    """
    
    if a < min_r or b > max_r:
        return 0

    return (b - a) / (max_r - min_r)