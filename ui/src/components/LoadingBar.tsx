import { Progress } from "@nextui-org/react"

/* *
 * Custom Loading Component
 * *******************************************************************/
function LoadingBar() {
  return (
    <div className="h-page w-screen">
      <Progress className="w-full" size="md" color="secondary" isIndeterminate aria-label="Loading..."/>
    </div>
  )
}

export default LoadingBar