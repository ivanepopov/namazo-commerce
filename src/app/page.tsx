import Header from "@/components/Header";
import ItemRow from "@/components/ItemRow";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col font-mono bg-gray-200 dark:bg-gray-800">
      <Header />
      <ItemRow />
      <ItemRow />
      <ItemRow />
    </div>
  );
}
