from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import user

app = FastAPI()

# TODO: Add your origins here
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

app.include_router(user.router)
