import getCategories from "@/services/getCategories";

describe('getCategories', () => {
    it('should return the correct categories', async () => {
        const categoryList = await getCategories('/categories')
        
        // Length and item check
        expect(categoryList.length).toBe(5)
        expect(categoryList[0].props.category).toBe("electronics")
        expect(categoryList[1].props.category).toBe("jewelery")
    })
    
    it('should return an empty array with an error', async () => {
        const categoryList = await getCategories('/error')
        expect(categoryList.length).toBe(0)
    })
})