def validated_data(df) :
    """
    Validated stock data
    """

    print("\n --- Data Info ---")
    print(df.info())

    print("\n --- Summary Statistics ---")
    describe_data = df.describe()
    describe_data = describe_data.astype(float).round(4)
    describe_data["volume"] =  describe_data["volume"].astype(int)
    print(describe_data)

    print("\n --- Missing Value found ---")
    print(df.isnull().sum())



    #Logical Checks

    if df.isnull().sum().sum() > 0 :
        raise Exception("Missing values found")
    
    print("\n Data validation successful ✅")
