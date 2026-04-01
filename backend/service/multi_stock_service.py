from database.mongo import collection
import pandas as pd


def get_multi_stock_df(symbols):
    all_data = []

    for symbol in symbols:
        data = list(collection.find({"symbol" : symbol}))

        df = pd.DataFrame(data)
        df["data"] = pd.to_datetime(df["date"])
        df = df.sort_values("date")

        df = df[["date", "return"]]
        df.rename(columns={"return" : symbol}, inplace=True)

        all_data.append(df)

    final_df = all_data[0]