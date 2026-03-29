from fastapi import APIRouter
from service.refresh_service import refresh_stock_data
from service.analysis_service import get_stock_analysis_from_db

router = APIRouter()

@router.get("/refresh/{symbol}")

def refresh(symbol:str) :
    return refresh_stock_data(symbol)


@router.get("/stock/{symbol}")

def get_stock(symbol:str) :
    return get_stock_analysis_from_db(symbol)
