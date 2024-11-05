import { Progress } from "@nextui-org/react"

/* *
 * Custom Loading Component
 * *******************************************************************/
function CustomLoading() {
  return (
    <div className="h-page w-screen">
      <Progress className="w-full" size="md" color="secondary" isIndeterminate aria-label="Loading..."/>
    </div>
  )
}

export default CustomLoading