import { Product } from '@/types/Product'
import { http, HttpResponse } from 'msw'

const allCategories = [
    { name: "electronics" },
    { name: "jewelery" },
    { name: "men's clothing" },
    { name: "women's clothing" },
    { name: "awesome things" }
]

const allProducts: Product[] = [
    { _id: "0", id: 0, title: "Car", price: 1000, description: "Red", category: "vehicles", image: "https://fastly.picsum.photos/id/352/200/200.jpg?hmac=HPgFQ0Sto_7261sbYIaRW0-z2Jq0-C92RSt0vkdC6Uc",
        rating: { rate: 3.3, count: 203 }, attributes: { brand: "FAIL"}, shippingDetails: { weight: -1, dimensions: { length: -1, width: -1, height: -1}, deliveryTimeframe: "FAIL"}},
    { _id: "1", id: 1, title: "Truck", price: 15, description: "Blue", category: "vehicles", image: "https://fastly.picsum.photos/id/416/200/200.jpg?hmac=QgMiXqHqKofoCv4h8lkrwRSOkn5Twkh15Dfl9Efvtwo",
        rating: { rate: 3.3, count: 203 }, attributes: { brand: "FAIL"}, shippingDetails: { weight: -1, dimensions: { length: -1, width: -1, height: -1}, deliveryTimeframe: "FAIL"}},
    { _id: "2", id: 2, title: "Alien", price: 15, description: "Purple", category: "vehicles", image: "https://fastly.picsum.photos/id/416/200/200.jpg?hmac=QgMiXqHqKofoCv4h8lkrwRSOkn5Twkh15Dfl9Efvtwo",
        rating: { rate: 3.3, count: 203 }, attributes: { brand: "FAIL"}, shippingDetails: { weight: -1, dimensions: { length: -1, width: -1, height: -1}, deliveryTimeframe: "FAIL"}},
]

const failProduct: Product = {
    _id: "FAIL", id: -1, price: -1, title: "FAIL", description: "FAIL", category: "FAIL", image: "FAIL",
    rating: { rate: -1, count: -1 }, attributes: { brand: "FAIL"},
    shippingDetails: { weight: -1, dimensions: { length: -1, width: -1, height: -1}, deliveryTimeframe: "FAIL"}
}

export const handlers = [
    // getCategories
    http.get('/api/categories/success', () => { 
        return HttpResponse.json(Array.from(allCategories), { status: 200 })
    }),

    http.get('/api/categories/fail', () => { 
        return HttpResponse.json([], { status: 502 })
    }),

    // getProductsByCategory
    http.get('/api/products/test_category/success', () => { 
        return HttpResponse.json(Array.from(allProducts), { status: 200 })
    }),

    http.get('/api/products/test_category/fail', () => { 
        return HttpResponse.json([], { status: 502 })
    }),

    // getProductById
    http.get('/api/product/test_id/success', () => { 
        return HttpResponse.json(allProducts[0], { status: 200 })
    }),

    http.get('/api/product/test_id/fail', () => { 
        return HttpResponse.json(failProduct, { status: 502 })
    }),
    
    // Just an Error
    http.get('/api/error', () => {
        return HttpResponse.json({}, { status: 502 })
    })
]