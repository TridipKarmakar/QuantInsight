def compute_binomial(returns):
    success = (returns > 0).sum()
    total = len(returns)

    p = success / total 

    return {
        "prob_up" : str(round(p * 100, 2)) + " %" ,
        "prob_down" :  ((1 - p).astype(float) * 100).round(2).astype(str) + " %"
    }