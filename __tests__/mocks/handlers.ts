import { Product } from '@/types/Product'
import { http, HttpResponse } from 'msw'

const allCategories = ["electronics","jewelery","men's clothing","women's clothing","awesome things"]

const allProducts: Product[] = [
    { id: "0", title: "Car", price: 1000, description: "Red", category: "vehicles", image: "https://fastly.picsum.photos/id/352/200/200.jpg?hmac=HPgFQ0Sto_7261sbYIaRW0-z2Jq0-C92RSt0vkdC6Uc", rating: { rate: 3.3, count: 203 } },
    { id: "1", title: "Truck", price: 15, description: "Blue", category: "vehicles", image: "https://fastly.picsum.photos/id/416/200/200.jpg?hmac=QgMiXqHqKofoCv4h8lkrwRSOkn5Twkh15Dfl9Efvtwo", rating: { rate: 3.3, count: 203 } },
    { id: "2", title: "Alien", price: 15, description: "Purple", category: "vehicles", image: "https://fastly.picsum.photos/id/416/200/200.jpg?hmac=QgMiXqHqKofoCv4h8lkrwRSOkn5Twkh15Dfl9Efvtwo", rating: { rate: 3.3, count: 203 } },
]

export const handlers = [
    http.get('/categories', () => { 
        return HttpResponse.json(Array.from(allCategories), { status: 200 })
    }),

    http.get('/products', () => { 
        return HttpResponse.json(Array.from(allProducts), { status: 200 })
    }),

    http.get('/error', () => {
        return HttpResponse.json({}, { status: 500 })
    })
]