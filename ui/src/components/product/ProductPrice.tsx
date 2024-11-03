/* * 
 * Component that nicely displays the price with a smaller text for
 * coins and the dollar sign
 *
 * @prop: price
 * @prop: type - optional type to change text
 * *******************************************************************/
function ProductPrice({ price, type } : { price : number, type? : string}) {

  const priceString = price.toString()
  const priceValues = priceString.split(".")
  if (priceValues.length === 1) priceValues.push("00")

  let textSize = "text-3xl p-2"
  if (type == "card") textSize = "text-default-500 text-xl"

  return (
      <p className={`${textSize}`}>
        <span className="text-xs align-top">$</span>
        {priceValues[0]}
        <span className="text-xs align-top">{priceValues[1]}</span>
      </p>
  )
}

export default ProductPrice