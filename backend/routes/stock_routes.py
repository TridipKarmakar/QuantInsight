from fastapi import APIRouter
from service.refresh_service import refresh_stock_data


router = APIRouter()

@router.get("/refresh/{symbol}")

def refresh(symbol:str) :
    return refresh_stock_data(symbol)