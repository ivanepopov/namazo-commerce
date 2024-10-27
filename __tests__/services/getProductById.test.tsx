import getProductById from "@/services/getProductById";
import { Product } from "@/types/Product";

describe('getProductById', () => {
    it('should return the correct products', async () => {
        const product: Product = await getProductById('test', '/id')
        
        // item check
        expect(product.title).toBe("Car")
        expect(product.description).toBe("Red")
        expect(product.category).toBe("vehicles")
    })

    it('should return a fail message with an error', async () => {
        const product = await getProductById('test', '/id/error')
        expect(product.id).toBe("FAIL")
    })
})