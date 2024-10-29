import getCategories from "@/services/getCategories";

describe('getCategories', () => {
    it('should return the correct categories', async () => {
        const categoryList: string[] = await getCategories('/categories')
        
        // Length and item check
        expect(categoryList.length).toBe(5)
        expect(categoryList[0]).toBe("electronics")
        expect(categoryList[1]).toBe("jewelery")
    })
    
    it('should return an empty object on error', async () => {
        const categoryList = await getCategories('/error')
        expect(categoryList.length).toBe(undefined)
    })
})