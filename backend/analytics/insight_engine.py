def generate_basic_insights(stats) :
    insights = []

    if stats["mean"] > 0 :
        insights.append("Average return is positive (bullish bias)")
    else:
        insights.append("Average return is negative (bearish bias)")

    if stats["std_dev"] > 0.02 :
        insights.append("High volatility")
    else:
        insights.append("Low to moderate volatality")


    return insights