import React from 'react'
import IconButton from './IconButton'

type Props = {}

export default function T_SearchBar({}: Props) {
  return (
    <div className="h-full w-full relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 flex items-center">
        <IconButton icon="search" />
      </div>

      <input type="text" name="search" id="search"
      className="block w-full h-full rounded-md border-0 py-1.5 pl-12 pr-7 text-gray-900
      ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
      focus:ring-1 focus:ring-inset focus:outline-none
      focus:ring-indigo-600 dark:focus:ring-orange-400
      sm:text-sm sm:leading-6"
      placeholder="Search" />

    </div>
  )
}