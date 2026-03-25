from fastapi import APIRouter
from service.stock_service import get_stock_analysis


router = APIRouter()

@router.get("/stock/{symbol}")

def get_stock(symbol:str) :
    return get_stock_analysis(symbol)