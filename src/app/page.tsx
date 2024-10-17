import Header from "@/components/Header";
import getCategories from "@/services/getCategories";

export default function Home() {

  const ItemRows = getCategories()

  return (
    <div className="w-full h-full flex flex-col font-mono justify-center items-center">
      <Header />
      <div className="max-w-[1280px] justify-center">
        {ItemRows}
      </div>
    </div>
  );
}
