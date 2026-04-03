import math

def poission_probability(k, lam):
    '''
    k = number of events 
    lam = expected rate (lambda) 

    '''

    return (math.exp(-lam) * (lam **k)) / math.factorial(k)



