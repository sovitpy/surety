from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
import random
import time
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["https://surety.itsmesovit.com"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Request(BaseModel):
    age: int
    income: int
    family: int
    zip: int


class ResponseModel(BaseModel):
    status: str
    message: str
    probability: float


@app.get("/")
def index():
    return {
        "status": "success",
        "message": "Dummy API"
    }


@app.post("/api/v1/predict")
def predict(data: Request):
    print(data)
    time.sleep(7)
    return ResponseModel(
        status="success",
        message="Prediction successful",
        probability=round(random.uniform(0, 1), 2)
    )


def start():
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)


if __name__ == '__main__':
    start()
