'use client'
import { useState } from "react"
import { FaCanadianMapleLeaf, FaGift, FaHeart, FaUmbrellaBeach } from "react-icons/fa"
import { IoFlowerSharp } from "react-icons/io5"

type Props = {
  type : string,
  dateEnd: string,
  percentOff: number
}

/* *
 * Component that displays if a sale is active, configurable in the
 * Header parent component
 * 
 * @prop type: Type of sale, can be "none" if none
 * @prop dateEnd
 * @prop percentOff
 * *******************************************************************/
function SaleRibbon(props : Props) {
  
  const { type, dateEnd, percentOff } = props
  const [visibilty, setVisibility] = useState(true)

  // Does not display if type is none, or if visibility is false
  if (type === "none") return <div></div>
  if (!visibilty) return <div></div>

  // Output customization based on sale type
  let saleRibbonClass = "w-screen h-12 flex flex-row items-center text-white "
  let decoration: JSX.Element = <div></div>

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
    <div id="sale_ribbon" className={saleRibbonClass}>
      <div className="w-1/4 pl-6">
      </div>
      <div className="flex flex-row w-3/4 h-full justify-evenly items-center">
        {decoration}
        {type} Sale! - {percentOff}% OFF ALL Namazo Products - Ends {dateEnd}
        {decoration}
      </div>
      <div className="w-1/4 flex items-center justify-end pr-6">
        <button onClick={() => setVisibility(false)}>close x</button>
      </div>
    </div>
  )
}

export default SaleRibbon