import Header from "@/components/Header";
import Ribbon from "@/components/Ribbon";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col font-mono justify-center items-center">
      <Header />
      <Ribbon />
    </div>
  );
}
