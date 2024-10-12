import Item from "./Item";

export default function ItemRow() {
  return (
    <div className="w-auto flex flex-row justify-evenly p-2">
      <ul className="inline-block whitespace-nowrap overflow-auto">
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
        <li className="p-2 inline-block whitespace-normal"><Item/></li>
      </ul>
    </div>
  )
}