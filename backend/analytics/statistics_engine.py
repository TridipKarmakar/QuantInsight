
def compute_all_statistics(df) :
    stats = {}

    # core return stats
    stats["mean"] = round(float(df["retuens"].mean()),6)
    stats["median"] = round(float(df["retuens"].median()),6)
    stats["std_dev"] = round(float(df["retuens"].std()),6)
    stats["variance"] =  round(float(df["retuens"].var()),6)

    # Extremes
    stats["min"] =  round(float(df["retuens"].min()),6)
    stats["max"] =  round(float(df["retuens"].max()),6)

    #Percentiles
    stats["percentiles"] = {
        "25" :round(float(df["retuens"].quantile(0.25)),6),
        "50" :round(float(df["retuens"].quantile(0.50)),6),
        "75" :round(float(df["retuens"].quantile(0.75)),6),
        "5"  :round(float(df["retuens"].quantile(0.05)),6),
        "95" :round(float(df["retuens"].quantile(0.95)),6),

    }

    return stats