from fastapi import APIRouter, Depends

from app.core.dependencies import get_user

router = APIRouter()


@router.get("/info")
async def get_user_info(user: dict = Depends(get_user)):
    return user
