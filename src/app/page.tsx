import ThemeSwitch from "@/components/ThemeSwitch";
import IconButton from "@/components/IconButton";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row justify-center w-full p-2">
        <div className="flex flex-row w-1/3">
          <IconButton icon="menu"/>
        </div>
        <div className="flex flex-row w-1/3 justify-center">
          <SearchBar />
        </div>
        <div className="flex flex-row w-1/3 justify-end">
          <ThemeSwitch />
        </div>
      </div>

    </div>
  );
}
