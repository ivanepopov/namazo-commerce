from motor.motor_asyncio import AsyncIOMotorCollection
from pydantic import BaseModel

class Category(BaseModel):
    name: str
    image: str
  
    @staticmethod
    def from_doc(obj) -> 'Category':
        return Category(
            name = str(obj.get("name")),
            image = str(obj.get("image")),
        )

class CategoryDAL:
    def __init__(self, category_collection: AsyncIOMotorCollection):
      self._category_collection = category_collection
      
    async def list_categories(self, session=None):
      async for doc in self._category_collection.find(
          {},
          sort={"name": 1},
          session=session,
      ):
          yield Category.from_doc(doc)