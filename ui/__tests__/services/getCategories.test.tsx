import getCategories from "@/services/getCategories";
import { Category } from "@/types/Category";

describe('getCategories', () => {
    it('should return the correct categories', async () => {
        const categoryList: Category[] = await getCategories("/api/categories/success")
        
        expect(categoryList.length).toBe(5)
        expect(categoryList[0].name).toBe("electronics")
        expect(categoryList[1].name).toBe("jewelery")
    })
    
    it('should return an empty array on failure', async () => {
        const categoryList: Category[] = await getCategories("/api/categories/fail")

        expect(categoryList.length).toBe(0)
    })
})