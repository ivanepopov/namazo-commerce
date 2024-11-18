import HomeCategoryList from "@/components/home/HomeCategoryList";

export default function Home() {

  return (
    <div className="h-page overflow-scroll snap-y snap-mandatory scrollbar-hide">
      <HomeCategoryList />
    </div>
  );
}
