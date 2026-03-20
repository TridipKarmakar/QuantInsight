def time_serise_feature_engineering(df) :
    
    df["close_norm"] = (df["close"] /  df["close"].max()).astype(float).round(2)  #normalized this stock value KAN-40 


    df["retuens"] = (df["close"].pct_change().fillna(0)).astype(float).round(4) #calculatethe daily return KAN-41

        

    df["pct_change"] = (df["close"].pct_change().fillna(0) * 100).astype(float).round(2) #calculate the percentage chnage
    
    return df