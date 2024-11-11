from contextlib import asynccontextmanager
from datetime import datetime
import os
import sys
from bson import ObjectId
from fastapi import FastAPI, status
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
import uvicorn

from product_dal import Product, ProductDAL
from category_dal import Category, CategoryDAL

MONGODB_URI = os.environ.get("MONGODB_URI")
DEBUG = os.environ.get("DEBUG", "").strip().lower() in {"1", "true", "on", "yes"}

@asynccontextmanager
async def lifespan(app: FastAPI):
    client = AsyncIOMotorClient(MONGODB_URI)
    database = client.get_default_database()

    pong = await database.command("ping")
    if int(pong["ok"]) != 1:
        raise Exception("Cluster connection is not okay!")

    products = database.get_collection("products")
    app.product_dal = ProductDAL(products)

    categories = database.get_collection("categories")
    app.category_dal = CategoryDAL(categories)
    
    yield

    client.close()


app = FastAPI(lifespan=lifespan, debug=DEBUG)

# CategoryDAL
@app.get("/api/categories")
async def get_categories() -> list[Category]:
    return [i async for i in app.category_dal.list_categories()]

# ProductDAL
@app.get("/api/product/{id}")
async def get_product(id: str) -> Product:
    return await app.product_dal.get_product(id)

@app.get("/api/products/{category}")
async def get_products(category: str, page: int = 1) -> list[Product]:
    products = []
    async for product in app.product_dal.list_products(category, page):
        products.append(product)
    return products

# Dummy
class DummyResponse(BaseModel):
    id: str
    when: datetime

@app.get("/api/dummy")
async def get_dummy() -> DummyResponse:
    return DummyResponse(
        id=str(ObjectId()),
        when=datetime.now(),
    )


def main(argv=sys.argv[1:]):
    try:
        uvicorn.run("server:app", host="0.0.0.0", port=3001, reload=DEBUG)
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()