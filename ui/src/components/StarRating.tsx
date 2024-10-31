type Props = {
  rating: {
      rate: number
      count: number
    }
}

export default function StarRating(props: Props) {

  let n = Math.round(props.rating.rate)

  let shinystars = ""
  let sadstars = ""

  for (let i = 0; i < 5; i++) {
    if (i < n) shinystars += "★"
    else sadstars += "★"
  }

  return <>
    <span className="text-yellow-600 text-lg">{shinystars}</span>
    <span className="text-gray-500 dark:text-white text-sm">{sadstars}</span>
    <span>- {props.rating.count} reviews</span>
  </>
}