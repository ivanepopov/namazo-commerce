import { render, screen } from '@testing-library/react';
import ItemRow from '@/components/ItemRow'
import getProducts from "@/services/getProducts"
import Item from '@/components/Item'
import { Product } from '@/types/Product'

// Mock the getProducts function
jest.mock('../../src/services/getProducts')

const props = { category: 'electronics' }
const product_data: Product[] = [
    {
        id: "1",
        image: "https://fastly.picsum.photos/id/960/200/200.jpg?hmac=jBtZLcx2FwawGC7rwl0dNWTD3q1uuB7CjJmALIF9pIg",
        title: "Sample Product Title",
        category: "Sample Category",
        description: "Sample Description",
        rating: { rate: 2.5, count: 9999 },
        price: 19.99
    },
    {
        id: "2",
        image: "https://fastly.picsum.photos/id/960/200/200.jpg?hmac=jBtZLcx2FwawGC7rwl0dNWTD3q1uuB7CjJmALIF9pIg",
        title: "Sample Product Title 2",
        category: "Sample Category 2",
        description: "Sample Description 2",
        rating: { rate: 4.5, count: 9999 },
        price: 29.99
    }
]

describe('ItemRow', () => {

  test('renders correctly with given category', () => {
    (getProducts as jest.Mock).mockReturnValue([
        <li key={product_data[0].id} className="p-2"><Item product_data={product_data[0]}/></li>,
        <li key={product_data[1].id} className="p-2"><Item product_data={product_data[1]}/></li>
    ])
    
    const { queryAllByRole } = render(<ItemRow {...props} />)
    
    // Expect 2 list items
    expect(queryAllByRole('listitem')).toHaveLength(2)
    expect(screen.getByText('Sample Product Title')).toBeInTheDocument()
  });

  test('displays loading state if products are not yet fetched', () => {
    (getProducts as jest.Mock).mockReturnValue([])
    
    const { queryAllByRole } = render(<ItemRow {...props} />)
    
    // Expect no list items
    expect(queryAllByRole('listitem')).toHaveLength(0)
    expect(screen.queryByText('Sample Product Title')).not.toBeInTheDocument()
  })
})