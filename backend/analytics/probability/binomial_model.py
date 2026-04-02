from analytics.probability.binomial import compute_binomial
import math

def binomial_probability(n, k, p):

    """
    n = total trials (days)
    k = success (updays)
    p = probability of success 

    """


    comb = math.comb(n, k)

    return comb * (p ** k) * ((1-p) ** (n-k))  