import { render, screen } from "@testing-library/react";
import { Product } from "@/types/Product";
import ProductItem from "@/components/ProductItem";

const product_data: Product = {
    id: "1",
    image: "https://fastly.picsum.photos/id/960/200/200.jpg?hmac=jBtZLcx2FwawGC7rwl0dNWTD3q1uuB7CjJmALIF9pIg",
    title: "Sample Product Title",
    category: "Sample Category",
    description: "Sample Description",
    rating: { rate: 2.5, count: 9999 },
    price: 29.99
}

describe("Test Item Component", () => {
  it('renders correctly with product data', () => {
    render(<ProductItem product_data={product_data} />)
    
    const imageElementSrc = screen.getByAltText("item").getAttribute("src")
    
    // Check if the image is rendered with the correct source
    expect(imageElementSrc).toContain("fastly.picsum.photos")
    // Check if title, rating, and price are displayed correctly
    expect(screen.getByText('Sample Product Title')).toBeInTheDocument()
    expect(screen.getByText('⭐ 2.5 - 9999 reviews')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
  })

  it('renders fallback image if product data does not include an image', () => {
    const noImageData = { ...product_data, image: "" }
    render(<ProductItem product_data={noImageData} />)
    
    const imageElementSrc = screen.getByAltText("item").getAttribute("src")
    
    // Check if the fallback image is rendered
    expect(imageElementSrc).toContain("img.jpg")
  })
})