def save_stock_data(collection, records) :
    if not records:
        print("No data to insert")
        return
    
    collection.insert_many(records)
    print(f"{len(records)} recods inserted")
