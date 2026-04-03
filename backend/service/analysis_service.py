from database.mongo import collection
from database.read_data import get_stock_dataframe
from analytics.statistics_engine import compute_all_statistics
from analytics.probability.binomial import compute_binomial
from analytics.insight_engine import generate_basic_insights
from analytics.probability.binomial_model import binomial_probability
from analytics.probability.poisson import compute_lambda
from analytics.probability.poisson_probability import poission_probability
from analytics.probability.geometric import geometric_probability, expected_waiting_time





def get_stock_analysis_from_db(symbol) :
    df = get_stock_dataframe(collection, symbol)
    if df is None:
        return {"error" : "No data found"}
    
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



    return {
        "symbol" : symbol,
        "stats" : stats,
        "insights" : insights,
        "probability" : probability,
        "binomial" : binomial,
        "poission -2%" : poission,
        "geometric" : geometric

    }