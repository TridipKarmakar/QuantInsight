from pymongo import MongoClient

MONGO_URL = "mongodb+srv://TridipKarmakar:Naidu12345@webdev.rjb3wel.mongodb.net/?appName=webDev"

client = MongoClient(MONGO_URL)

#Create database
db = client["quant_insignt"]

#Create collection
collection = db["stock_data"]

print("MongoDB Altaas connected successfully !")
