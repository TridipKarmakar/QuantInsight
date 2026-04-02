from database.mongo import collection
import pandas as pd


def get_multi_stock_df(symbols):
    all_data = []

    for symbol in symbols:
        data = list(collection.find({"symbol" : symbol}))

        df = pd.DataFrame(data)
        df["data"] = pd.to_datetime(df["date"])
        df = df.sort_values(by = "date", ascending=False )

        df = df[["return","date"]]
        df.rename(columns={"return" : symbol}, inplace=True)

        all_data.append(df)

    final_df = all_data[0]

    for df in all_data[1:]:
        final_df = pd.merge(final_df,df, on="date", how="inner")

    final_df.set_index("date", inplace=True)

    return final_df