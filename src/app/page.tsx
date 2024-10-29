import Header from "@/features/header/Header";
import Ribbon from "@/features/ribbon/Ribbon";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col font-mono justify-center items-center">
      <Header />
      <Ribbon />
    </div>
  );
}
