import getProducts from "@/services/getProducts";
import { Product } from "@/types/Product";

describe('getProducts', () => {
    it('should return the correct products', async () => {
        const productList: Product[] = await getProducts('test', '/products')
        
        // Length and item check
        expect(productList.length).toBe(3)
        expect(productList[0].id).toBe("0")
        expect(productList[1].id).toBe("1")
        expect(productList[2].id).toBe("2")
    })

    it('should return a fail message with an error', async () => {
        const productList = await getProducts('test', '/error')
        expect(productList.length).toBe(0)
    })
})