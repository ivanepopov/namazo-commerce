import getProductsByCategory from "@/services/getProductsByCategory";
import { Product } from "@/types/Product";

describe('getProductsByCategory', () => {
    it('should return the correct products', async () => {
        const productList: Product[] = await getProductsByCategory('test', '/products')
        
        expect(productList.length).toBe(3)
        expect(productList[0].id).toBe("0")
        expect(productList[1].id).toBe("1")
        expect(productList[2].id).toBe("2")
    })

    it('should return an empty object on error', async () => {
        const categoryList = await getProductsByCategory('test', '/error')
        expect(categoryList.length).toBe(undefined)
    })
})