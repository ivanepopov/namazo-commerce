export type Product = {
    _id: string
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
    attributes: {
        brand: string
    }
    shippingDetails: {
        weight: number
        dimensions: {
            length: number
            width: number
            height: number
        }
        deliveryTimeframe: string
    }
}

// PRODUCT_OLD - delete soon...
// export type Product = {
//     id: string,
//     title: string,
//     price: number,
//     description: string,
//     category: string,
//     image: string,
//     rating: {
//         rate: number,
//         count: number
//     }
// }