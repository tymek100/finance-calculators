from fastapi import FastAPI
from pydantic import BaseModel
from numpy_financial import nper

app = FastAPI()

class SimulationInput(BaseModel):
    capital_remaining: float
    apr: float
    monthly_payment: float

@app.get("/remaining-payments")
def remaining_payments(data: SimulationInput):
    """
    Calculate the remaining payments using:
    
    monthly_rate = apr / 12
    remaining_payments = nper(monthly_rate, monthly_payment, capital_remaining)
    """
    monthly_rate = data.apr / 12
    result = nper(monthly_rate, data.monthly_payment, data.capital_remaining)
    return {"remaining_payments": result}
