import getProducts from "@/services/getProducts";

type Props = {
  category : string
}

export default function ItemRow(props: Props) {

  const Items = getProducts(props.category)

  return (
    <ul className="flex justify-center p-4 overflow-x-auto">
      {Items}
    </ul>
  )
}