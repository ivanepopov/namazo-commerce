import getProductById from "@/services/getProductById";
import { Product } from "@/types/Product";

describe('getProductById', () => {
    it('should return the correct product based on id', async () => {
        const product: Product = await getProductById("test_id/success")
        
        expect(product.title).toBe("Car")
        expect(product.description).toBe("Red")
        expect(product.category).toBe("vehicles")
    })

    it('should return a default fail product', async () => {
        const product = await getProductById("test_id/fail")
        
        expect(product._id).toBe("FAIL")
        expect(product.id).toBe(-1)
        expect(product.title).toBe("FAIL")
    })
})