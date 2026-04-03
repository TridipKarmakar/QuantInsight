def compute_lambda(df, threshold = -0.02): 
    
    returns = df["return"].dropna()
    total_days = len(returns)
    
    rare_events = (returns < threshold).sum()

    if total_days == 0:
        return 0
    
    lambda_val = rare_events / total_days 
    
    return lambda_val