/* * 
 * Component that nicely displays gold stars and colorless stars based
 * on rate, along with the number of reviews
 *
 * @prop: rate - rating out of 5 stars
 * @prop: count - total number of reviews
 * *******************************************************************/
function ProductStarRating({ rating }: { rating: { rate : number, count : number }}) {

  let n = Math.round(rating.rate)
  let shinystars = ""
  let sadstars = ""

  for (let i = 0; i < 5; i++) {
    if (i < n) shinystars += "★"
    else sadstars += "★"
  }

  return (
    <>
      <span className="text-yellow-600 text-medium">{shinystars}</span>
      <span className="text-gray-500 dark:text-white text-medium">{sadstars}</span>
      <span> - {rating.count} reviews</span>
    </>
  )
}

export default ProductStarRating