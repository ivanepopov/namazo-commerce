import getCategories from "@/services/getCategories";

describe('getCategories', () => {
    it('should return the correct categories', async () => {
        const categoryList: string[] = await getCategories("/api/categories/success")
        
        expect(categoryList.length).toBe(5)
        expect(categoryList[0]).toBe("electronics")
        expect(categoryList[1]).toBe("jewelery")
    })
    
    it('should return an empty array on failure', async () => {
        const categoryList: string[] = await getCategories("/api/categories/fail")

        expect(categoryList.length).toBe(0)
    })
})