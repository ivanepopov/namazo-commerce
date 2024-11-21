import CategoryCard from "@/components/category/CategoryCard"
import { Category } from "@/types/Category"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { IoIosArrowDown } from "react-icons/io"

type Props = {
  categories: Category[]
  router: AppRouterInstance
}
/* * 
 * Home Page Component that displays a list of categories
 * *******************************************************************/
function HomeCategoryList(props: Props) {

  const { categories, router } = props

  return (
    <section className="flex flex-col w-screen h-page justify-between snap-center">
      <div className="flex p-4 space-x-4 justify-center">
      { categories.map(c => <CategoryCard key={c.name} category={c.name} image={c.image} router={router} />) }
      </div>
      <div className="flex justify-center items-center h-16 bg-gradient-to-b from-[#282828] to-[#484848]">
        <IoIosArrowDown className="text-black dark:text-white " size={32} />
      </div>
    </section>
  )
}

export default HomeCategoryList