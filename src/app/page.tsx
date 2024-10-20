import Header from "@/components/Header";
import ProductItemBody from "@/components/ProductItemBody";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col font-mono justify-center items-center">
      <Header />
      <ProductItemBody />
    </div>
  );
}
