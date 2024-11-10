from motor.motor_asyncio import AsyncIOMotorCollection
from pydantic import BaseModel

class Attributes(BaseModel):
    brand: str

    @staticmethod
    def from_doc(obj) -> 'Attributes':
        return Attributes(
            brand = str(obj.get("brand")),
        )


class Dimensions(BaseModel):
    length: float
    width: float
    height: float

    @staticmethod
    def from_doc(obj) -> 'Dimensions':
        return Dimensions(
            length = float(obj.get("length")),
            width = float(obj.get("width")),
            height = float(obj.get("height")),
        )


class Rating(BaseModel):
    rate: float
    count: int

    @staticmethod
    def from_doc(obj) -> 'Rating':
        return Rating(
            rate = float(obj.get("rate")),
            count = int(obj.get("count")),
        )


class ShippingDetails(BaseModel):
    weight: float
    dimensions: Dimensions
    deliveryTimeframe: str

    @staticmethod
    def from_doc(obj) -> 'ShippingDetails':
        return ShippingDetails(
            weight = float(obj.get("weight")),
            dimensions = Dimensions.from_doc(obj.get("dimensions")),
            deliveryTimeframe = str(obj.get("deliveryTimeframe")),
        )


class Product(BaseModel):
    _id: str
    id: int
    title: str
    price: float
    description: str
    category: str
    image: str
    rating: Rating
    attributes: Attributes
    shippingDetails: ShippingDetails

    @staticmethod
    def from_doc(obj) -> 'Product':
        return Product(
            _id = str(obj.get("_id")),
            id = int(obj.get("id")),
            title = str(obj.get("title")),
            price = float(obj.get("price")),
            description = str(obj.get("description")),
            category = str(obj.get("category")),
            image = str(obj.get("image")),
            rating = Rating.from_doc(obj.get("rating")),
            attributes = Attributes.from_doc(obj.get("attributes")),
            shippingDetails = ShippingDetails.from_doc(obj.get("shippingDetails")),
        )


class ProductDAL:
    def __init__(self, product_collection: AsyncIOMotorCollection):
      self._product_collection = product_collection
    
    async def get_product(self, id: str, session=None) -> Product:
        doc = await self._product_collection.find_one(
            {"id": int(id)},
            session=session,
        )
        return Product.from_doc(doc)
    
    async def list_products(self, category: str, page: int = 1, session=None):
        items_per_page = 20
        skip_count = (page - 1) * items_per_page
            
        async for doc in self._product_collection.find(
            {"category": category},
            sort={"id": 1},
            skip=skip_count,
            limit=items_per_page
        ):
            yield Product.from_doc(doc)
