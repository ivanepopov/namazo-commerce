'use client'
import { Button, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Radio, RadioGroup, Selection, Slider } from "@nextui-org/react"
import { useState } from "react";
import { FaSort } from "react-icons/fa";

/* * 
 * Sidebar component that allows user to filter products by size,
 * price, color, etc.
 * *******************************************************************/
function Sidebar() {

  const [selectedKey, setSelectedKey] = useState<Selection>(new Set(["Featured"]));

  return (
    <div className="w-1/4 p-2 text-black dark:text-white text-center">

      <p>Filter Items</p>
      <Divider />
      
      <Dropdown className="text-black dark:text-white">
        <DropdownTrigger>
          <Button color="default" variant="light" className="capitalize" startContent={<FaSort/>}>
            Sort by {selectedKey}
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label="Sort by"
          variant="shadow"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
        >
          <DropdownItem key="Featured">Featured</DropdownItem>
          <DropdownItem key="Price: Low to High">Price: Low to High</DropdownItem>
          <DropdownItem key="Price: High to Low">Price: High to Low</DropdownItem>
          <DropdownItem key="Rating">Rating</DropdownItem>
          <DropdownItem key="Review Count">Review Count</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      
      <p className="text-left p-2">Color</p>
      <Divider/>
      <RadioGroup color="secondary" className="p-2">
        <Radio value="Pink">
          <p className="text-gray-900 dark:text-slate-50">Pink</p>
        </Radio>
        <Radio value="Orange">
          <p className="text-gray-900 dark:text-slate-50">Orange</p>
        </Radio>
        <Radio value="Purple">
          <p className="text-gray-900 dark:text-slate-50">Purple</p>
        </Radio>
      </RadioGroup>

      <p className="text-left p-2">Brand</p>
      <Divider/>
      <RadioGroup color="secondary" className="p-2">
        <Radio value="Pink">
          <p className="text-gray-900 dark:text-slate-50">Pink</p>
        </Radio>
        <Radio value="Orange">
          <p className="text-gray-900 dark:text-slate-50">Orange</p>
        </Radio>
        <Radio value="Purple">
          <p className="text-gray-900 dark:text-slate-50">Purple</p>
        </Radio>
      </RadioGroup>
      
      
      <p className="text-left p-2">Dimensions</p>
      <Divider/>
      <Slider 
        label="Height"
        size="sm"
        step={10}
        minValue={0} 
        maxValue={200} 
        defaultValue={[0, 200]} 
        formatOptions={{style: "unit", unit: "inch"}}
        classNames={{
          base: "max-w-md p-2",
          filler: "bg-gradient-to-r from-secondary-500 to-secondary-300",
          label: "font-small text-default-700 text-small",
          value: "font-small text-default-500 text-small",
          thumb: [
            "transition-size",
            "bg-gradient-to-r from-secondary-400 to-secondary-500",
            "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          ],
        }}
      />

      <Slider 
        label="Width"
        size="sm"
        step={10}
        minValue={0} 
        maxValue={200} 
        defaultValue={[0, 200]} 
        formatOptions={{style: "unit", unit: "inch"}}
        classNames={{
          base: "max-w-md p-2",
          filler: "bg-gradient-to-r from-secondary-500 to-secondary-300",
          label: "font-small text-default-700 text-small",
          value: "font-small text-default-500 text-small",
          thumb: [
            "transition-size",
            "bg-gradient-to-r from-secondary-400 to-secondary-500",
            "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          ],
        }}
      />

      <Slider 
        label="Length"
        size="sm"
        step={10}
        minValue={0} 
        maxValue={200} 
        defaultValue={[0, 200]} 
        formatOptions={{style: "unit", unit: "inch"}}
        classNames={{
          base: "max-w-md p-2",
          filler: "bg-gradient-to-r from-secondary-500 to-secondary-300",
          label: "font-small text-default-700 text-small",
          value: "font-small text-default-500 text-small",
          thumb: [
            "transition-size",
            "bg-gradient-to-r from-secondary-400 to-secondary-500",
            "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          ],
        }}
      />

    <p className="text-left p-2">Price</p>
    <Divider/>
    <Slider 
      label="Price Range"
      size="sm"
      step={100} 
      maxValue={1000} 
      minValue={0} 
      defaultValue={[0, 800]}
      showOutline={true}
      disableThumbScale={true}
      formatOptions={{style: "currency", currency: "USD"}}
      tooltipValueFormatOptions={{style: "currency", currency: "USD", maximumFractionDigits: 0}}
      classNames={{
        base: "max-w-md p-2",
        filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
        labelWrapper: "mb-1",
        label: "font-medium text-default-700 text-medium",
        value: "font-medium text-default-500 text-small",
        thumb: [
          "transition-size",
          "bg-gradient-to-r from-secondary-400 to-primary-500",
          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-4 data-[dragging=true]:after:w-4"
        ],
        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
      }}
      tooltipProps={{
        offset: 10,
        placement: "bottom",
        classNames: {
          base: [
            // arrow color
            "before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500",
          ],
          content: [
            "py-2 shadow-xl",
            "text-white bg-gradient-to-r from-secondary-400 to-primary-500",
          ],
        },
      }}
    />
    </div>
  )
}

export default Sidebar