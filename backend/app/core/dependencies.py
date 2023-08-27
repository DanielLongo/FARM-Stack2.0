from datetime import datetime
from fastapi import Depends
from app.core.auth import JsonWebToken, get_bearer_token
from app.clients.mongo_client import mongodb


async def get_user(token: str = Depends(get_bearer_token)) -> dict:
    user_id = JsonWebToken(token).validate().get("sub")
    # find user in database
    user = await mongodb().users.find_one({"auth0_id": user_id})
    if not user:
        # create user in database
        await mongodb().users.insert_one(
            {"auth0_id": user_id, "publication_id": None, "created_at": datetime.now()},
        )
        user = await mongodb().users.find_one({"auth0_id": user_id})
    return dict(user)


def get_user_id(token: str = Depends(get_bearer_token)):
    return JsonWebToken(token).validate().get("sub")
