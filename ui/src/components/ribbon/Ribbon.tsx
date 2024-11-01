import getCategories from "@/services/getCategories"

export default async function Ribbon() {
  
  const categories: string[] = await getCategories()

  return (
    <div className="flex flex-row h-12 w-full items-center align-middle justify-evenly bg-indigo-600/60 dark:bg-orange-400/60 font-excalifont text-white">
      {
        categories.map(c => <a key={c} title={c} href={`/store/${c}`}>{c}</a>)
      }
    </div>
  )
}