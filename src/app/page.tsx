import Header from "@/components/header/Header";
import Ribbon from "@/components/ribbon/Ribbon";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col font-mono justify-center items-center">
      <Header />
      <Ribbon />
    </div>
  );
}
