import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react"
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
    <Card className="w-[540px] h-[600px] col-span-12 sm:col-span-5">
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={image}
      />
      <CardHeader className="bg-white/80 border-white/20 border-1 top-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-5">
      <div className="ml-3">
        <p className="text-tiny uppercase font-bold">New</p>
        <h4 className="text-black font-medium text-2xl">{category}</h4>
      </div>
      <Button onClick={() => router.push(`/store/${category}`)} className="absolute right-3 text-tiny text-white bg-black/80" variant="flat" color="default" radius="lg" size="sm">
        Shop now
      </Button>
    </CardHeader>
    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <div className="flex flex-col">
        <p className="text-tiny text-white/60">Explore the latest collections.</p>
        <p className="text-tiny text-white/60">Exclusively found on Namazo.</p>
      </div>
    </CardFooter>
  </Card>
  )
}