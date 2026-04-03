def geometric_probability(k , p):
    """
    k = trial number (day)
    p = probability of success (up movement)

    """

    if p <= 0 or p > 1 :
        return None
    

    return ((1-p) ** (k -1 )) * p 

def expected_waiting_time(p):

    """
    Expected number pf trials until first success

    """

    if p <= 0 :
        return None
    

    return 1 / p

