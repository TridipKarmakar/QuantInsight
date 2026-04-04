import numpy as np


'''
Generate random return based on the last mean and sd
'''
def generate_random_return(mean, std, days):
    return np.random.normal(mean, std, days)



'''
Simulate the price paths
'''
def simulate_price_path(start_price, mean, std, days) :
    prices = [start_price]

    for _ in range(days) :
        random_return = np.random.normal(mean, std)
        next_price = prices[-1] * np.exp(random_return)
        prices.append(next_price)

    return prices


'''
Run 1000 simulation
'''
def monte_carlo__simulaiton(df, num_simulations=100,  days=30):
    mean = round(df["return"].mean(),4)
    std = round(df["return"].std(),4)
    start_price = round(df["close"].tolist()[0],4)

    simulaitons = []
    
    for _ in range(num_simulations):
        path = simulate_price_path(start_price, mean, std, days)
        simulaitons.append(path)

    return simulaitons
