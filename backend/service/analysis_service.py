import numpy as np

from database.mongo import collection
from database.read_data import get_stock_dataframe
from analytics.statistics_engine import compute_all_statistics
from analytics.probability.binomial import compute_binomial
from analytics.insight_engine import generate_basic_insights
from analytics.probability.binomial_model import binomial_probability
from analytics.probability.poisson import compute_lambda
from analytics.probability.poisson_probability import poission_probability
from analytics.probability.geometric import geometric_probability, expected_waiting_time
from analytics.probability.uniform import compute_uniform_distribution, uniform_probability
from analytics.monte_carlo_simulation.mote_carlo_simulation_analysis import monte_carlo__simulaiton





def get_stock_analysis_from_db(symbol) :
    df = get_stock_dataframe(collection, symbol)
    if df is None:
        return {"error" : "No data found"}
    
    current_price = df["close"].iloc[-1]
    today_return = df["pct_change"].iloc[-1]

    stats = compute_all_statistics(df)

    insights = generate_basic_insights(stats)

    probability = compute_binomial(df["return"])

    binomial = {
        "3_up_in_5_days" : round( binomial_probability(5,3,probability["prob_up"] ),2), 
        "5_up_in_5_days" : round(binomial_probability(5,5,probability["prob_up"]),2)
     }

    lam = compute_lambda(df)

    poission = {
        "lambda" : lam, 
        "0_events" : round( poission_probability(0, lam),2), 
        "1_events" : round( poission_probability(1, lam),2), 
        "2_events" : round( poission_probability(2, lam),2), 
    }


    p = probability["prob_up"]

    geometric = {
        "prob_1_day" : round(geometric_probability(1, p),2),
        "prob_2_day" : round(geometric_probability(2, p),2),
        "prob_3_day" : round(geometric_probability(3, p),2),
        "exoected_days_for_gain" : expected_waiting_time(p),
    }

    uniform_data = compute_uniform_distribution(df)

    min_r = uniform_data["min_return"]
    max_r = uniform_data["max_return"]

    uniform = {
        "range" : uniform_data,
        "prob_0_to_2_percentage": round(uniform_probability(0, 0.02, min_r, max_r),2)

    }



    # Monte carlo 10,000 simulation
    simulaitons = monte_carlo__simulaiton(df,num_simulations=10000)

    final_prices = [path[-1] for path in simulaitons]

    monte_carlo = {
        "mean_price" : round(np.mean(final_prices),2),
        "mediun_price" : round(np.median(final_prices),2),
        "min_price" : round(np.min(final_prices),2),
        "max_price" : round(np.max(final_prices),2),
        "percentiles" : {
            "5%" : round(np.percentile(final_prices,5),2),
            "25%" : round(np.percentile(final_prices,25),2),
            "75%" : round(np.percentile(final_prices,75),2),
            "95%" : round(np.percentile(final_prices,95),2)


        }
    }

    return {

        "symbol" : symbol,
        "current_price" : current_price,
        "today_return" : today_return,
        "stats" : stats,
        "insights" : insights,
        "probability" : probability,
        "binomial" : binomial,
        "poission -2%" : poission,
        "geometric" : geometric,
        "uniform" : uniform,
        "monte carlo" : monte_carlo

    }