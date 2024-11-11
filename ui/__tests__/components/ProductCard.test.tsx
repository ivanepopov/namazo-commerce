import { render, screen } from "@testing-library/react";
import { Product } from "@/types/Product";
import ProductCard from "@/components/product/ProductCard";

const product_data : Product = {
  _id: "FAIL", id: 99, price: 99, title: "Sample Product Title", description: "Sample Description", category: "Sample Category", image: "https://fastly.picsum.photos/id/960/200/200.jpg?hmac=jBtZLcx2FwawGC7rwl0dNWTD3q1uuB7CjJmALIF9pIg",
  rating: { rate: 5, count: 99 }, attributes: { brand: "Sample Brand"},
  shippingDetails: { weight: 99, dimensions: { length: 99, width: 99, height: 99}, deliveryTimeframe: "Sample Delivery"}
}

describe("Test Item Component", () => {
  it('renders correctly with product data', () => {
    render(<ProductCard product_data={product_data} />)
    
    const imageElementSrc = screen.getByAltText("Sample Product Title").getAttribute("src")
    
    // Check if the image is rendered with the correct source
    expect(imageElementSrc).toContain("fastly.picsum.photos")
    // Check if title, rating, and price are displayed correctly
    expect(screen.getByText('Sample Product Title')).toBeInTheDocument()
    expect(screen.getByText('★★★★★')).toBeInTheDocument()
    expect(screen.getByText('- 99 reviews')).toBeInTheDocument()
    expect(screen.getByText('$')).toBeInTheDocument()
  })

  it('renders fallback image if product data does not include an image', () => {
    const noImageData = { ...product_data, image: "" }
    render(<ProductCard product_data={noImageData} />)
    
    const imageElementSrc = screen.getAllByAltText("logo")
    
    // Check if the fallback image is rendered
    expect(imageElementSrc[0].getAttribute("src")).toContain("img.jpg")
  })
})