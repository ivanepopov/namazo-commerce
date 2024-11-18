import { Button, Card, CardFooter, Image } from "@nextui-org/react"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

type Props = {
  category: string
  image: string
  router: AppRouterInstance
}

/* * 
 * Component that displays category information in a NextUI Card
 *
 * @prop: category
 * @prop: image
 * *******************************************************************/
export default function CategoryCard(props: Props) {

  const { category, image, router } = props

  return (
    <Card className="w-[540px] h-[400px] col-span-12 sm:col-span-5">
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={image}
      />
    <CardFooter className="dark:bg-white/80 bg-black/80 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-5">
      <div className="ml-3">
        <p className="text-tiny uppercase font-bold">New</p>
        <h4 className="dark:text-black text-white font-medium text-2xl">{category}</h4>
      </div>
      <Button onClick={() => router.push(`/store/${category}`)} className="absolute right-3 text-tiny text-white bg-black/80" variant="flat" color="default" radius="lg" size="sm">
        Shop now
      </Button>
    </CardFooter>
  </Card>
  )
}