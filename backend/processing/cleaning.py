import pandas as pd

def time_serise_analysis_dataset (df) :
    df = df.copy() #copy this dataset so that for delink the referance 
    df = df.drop_duplicates() #drop the duplicate value
    df = df.dropna()  #drop the missing value KAN-39
    df = df.rename(columns={                            
            "1. open" :"open",
            "2. high" :"high" ,  
            "3. low"  :"low" , 
            "4. close" :"close"  ,
            "5. volume" : "volume" }) #rename the column
    df = df.astype({"open":float,"high":float,"low":float,"close":float,"volume":int}).round(2) #reasign the data type and round it by 2

    df.index = pd.to_datetime(df.index) #set index value as date time
    
    df = df.sort_index(ascending=True) # sorted the index

    df.reset_index(inplace=True)
    df.rename(columns={"index":"Date"},inplace=True) #change the index name as date 
    df = df.set_index("Date") #set this cloumn as date time 
    return df
