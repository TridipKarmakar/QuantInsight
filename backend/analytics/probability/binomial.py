def compute_binomial(returns):
    success = (returns > 0).sum()
    total = len(returns)

    p = success / total 

    return {
        "prob_up" : round(p.astype(float) , 3) ,
        "prob_down" :  round((1 - p).astype(float),3)
    }