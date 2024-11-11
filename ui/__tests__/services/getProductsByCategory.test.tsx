import getProductsByCategory from "@/services/getProductsByCategory";
import { Product } from "@/types/Product";

describe('getProductsByCategory', () => {
    it('should return the correct products', async () => {
        const productList: Product[] = await getProductsByCategory("test_category/success", 0)
        
        expect(productList.length).toBe(3)
        expect(productList[0].id).toBe(0)
        expect(productList[1].id).toBe(1)
        expect(productList[2].id).toBe(2)
    })

    it('should return an empty object on error', async () => {
        const categoryList = await getProductsByCategory("test_category/fail", 0)
        
        expect(categoryList.length).toBe(0)
    })
})