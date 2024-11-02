export default function ProductStarRating({ rating }: { rating: { rate: number, count: number }}) {

  let n = Math.round(rating.rate)

  let shinystars = ""
  let sadstars = ""

  for (let i = 0; i < 5; i++) {
    if (i < n) shinystars += "★"
    else sadstars += "★"
  }

  return (
    <>
      <span className="text-yellow-600 text-lg">{shinystars}</span>
      <span className="text-gray-500 dark:text-white text-sm">{sadstars}</span>
      <span>- {rating.count} reviews</span>
    </>
  )
}