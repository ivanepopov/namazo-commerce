import HomeCategoryList from "@/components/home/HomeCategoryList";
import HomeNamazoInfo from "@/components/home/HomeNamazoInfo";

export default function Home() {

  return (
    <div className="h-page overflow-scroll snap-y snap-mandatory scrollbar-hide">
      <HomeCategoryList />
      <HomeNamazoInfo />
    </div>
  );
}
