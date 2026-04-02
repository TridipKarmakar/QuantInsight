from fastapi import APIRouter, Query
from typing import List
from service.refresh_service import refresh_stock_data
from service.analysis_service import get_stock_analysis_from_db
from service.correlation_service import get_correlation


router = APIRouter()

@router.get("/refresh/{symbol}")

def refresh(symbol:str) :
    return refresh_stock_data(symbol)


@router.get("/stock/{symbol}")

def get_stock(symbol:str) :
    return get_stock_analysis_from_db(symbol)


@router.get("/correlation")
def correlation(symbols: List[str] = Query(...)) :
    return get_correlation(symbols)