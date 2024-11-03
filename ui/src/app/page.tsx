'use client'
import { useEffect } from "react";
import { useSearchContext } from "@/providers/SearchProvider";

export default function Home() {

  const { refreshData, setRefreshData } = useSearchContext()

  useEffect(() => {
    setRefreshData(!refreshData)
  }, [])

  return (
    <div className="w-screen h-[calc(100vh-100px)]">
    </div>
  );
}
