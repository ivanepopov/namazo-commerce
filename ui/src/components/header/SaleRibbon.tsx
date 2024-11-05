import { FaCanadianMapleLeaf, FaGift, FaHeart, FaUmbrellaBeach } from "react-icons/fa"
import { IoFlowerSharp } from "react-icons/io5"

type Props = {
  type : string,
  dateEnd: string,
  percentOff: number
}

function SaleRibbon(props : Props) {
  
  const { type, dateEnd, percentOff } = props

  if (type === "none") return <></>
  
  let saleRibbonClass = "flex flex-row h-12 w-screen justify-evenly items-center text-white "
  let decoration: JSX.Element = <></>

  switch (type.toLowerCase()) {
    case "winter":
      saleRibbonClass += "bg-red-800"
      decoration = <FaGift />
      break;
    case "spring":
      saleRibbonClass += "bg-green-600"
      decoration = <IoFlowerSharp />
      break;
    case "summer":
      saleRibbonClass += "bg-yellow-500"
      decoration = <FaUmbrellaBeach />
      break;
    case "fall":
      saleRibbonClass += "bg-orange-600"
      decoration = <FaCanadianMapleLeaf />
      break;
    default:
      saleRibbonClass += "bg-red-800"
      decoration = <FaHeart />
      break;
  }

  return (
    <div className={saleRibbonClass}>
      {decoration}
      {type} Sale! - {percentOff}% OFF ALL Namazo Products - Ends {dateEnd}
      {decoration}
    </div>
  )
}

export default SaleRibbon