from fastapi import FastAPI
from pydantic import BaseModel
from numpy_financial import nper
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (change to frontend URL in production)
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # Allows all headers
)

class SimulationInput(BaseModel):
    capital_remaining: float
    apr: float
    monthly_payment: float

@app.post("/remaining-payments")
def remaining_payments(data: SimulationInput):
    """
    Calculate the remaining payments using:
    
    monthly_rate = apr / 12
    remaining_payments = nper(monthly_rate, monthly_payment, capital_remaining)
    """
    monthly_rate = data.apr / 100 / 12
    result = nper(monthly_rate, -data.monthly_payment, data.capital_remaining)
    return { "remaining_payments": round(abs(result.item()), 2) }

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
