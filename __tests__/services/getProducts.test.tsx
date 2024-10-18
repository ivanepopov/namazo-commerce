import getProducts from "@/services/getProducts";

describe('getProducts', () => {
    it('should return the correct products', async () => {
        const productList = await getProducts('test', '/products')
        
        // Length and item check
        expect(productList.length).toBe(3)
        expect(productList[0].key).toBe("0")
        expect(productList[1].key).toBe("1")
        expect(productList[2].key).toBe("2")
    })

    it('should return a fail message with an error', async () => {
        const productList = await getProducts('test', '/error')
        expect(productList.length).toBe(0)
    })
})