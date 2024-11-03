import { Button, Code } from '@nextui-org/react'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col h-[calc(100vh-100px)] w-screen justify-center items-center">
      <Code color="default" size="lg">404: Page not found</Code>
      <Link href="/">
        <Button color="warning" variant="light">
          Return Home
        </Button>
      </Link>
    </div>
  )
}