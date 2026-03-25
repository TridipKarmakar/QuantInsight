from pymongo import MongoClient
from dotenv import load_dotenv
import os 

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")

client = MongoClient(MONGO_URL)

#Create database
db = client["quant_insignt"]

#Create collection
collection = db["stock_data"]

print("MongoDB Altaas connected successfully !")
