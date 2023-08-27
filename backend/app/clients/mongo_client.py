import functools
from app.clients.base import BaseClient
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase


class MongoClient(BaseClient):
    # TODO: Set names here
    MONGO_URI_NAME = "MONGO_KEY"
    DATABASE_NAME = "DATABASE_NAME"

    def __init__(self):
        super().__init__()
        self.mongo_uri = self.get_secret(self.MONGO_URI_NAME)
        assert self.mongo_uri is not None, "MONGO_URI environment variable not set"
        self.client = AsyncIOMotorClient(self.mongo_uri)[self.DATABASE_NAME]


@functools.cache
def mongodb() -> AsyncIOMotorDatabase:  # type: ignore
    return MongoClient().client
