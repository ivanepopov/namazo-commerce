'use client'
import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Radio, RadioGroup, useDisclosure } from '@nextui-org/react'
import { useState } from 'react';
import { FaStore } from 'react-icons/fa'

function Store() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [store, setStore] = useState("None")

  return (
    <div>
      <Button onPress={onOpen} variant="light" color="default" startContent={<FaStore size={24}/>}>
        <div className="flex flex-col self-start">
          <p>Select a Store</p>
          <p>{store}</p>
        </div>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        className="text-black dark:text-white"
      >
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center">
                Select Location
              </ModalHeader>
              <ModalBody className="text-black dark:text-white">
                <RadioGroup
                  color="secondary"
                  value={store}
                  onValueChange={setStore}
                >
                  <Divider />
                  <Radio value="Los Angeles" description={<div className="text-gray-500 leading-[.5rem] p-2"><p>21 S California Ave</p><br/><p>Los Angeles, CA 99999</p></div>}>
                    <p className="text-gray-900 dark:text-slate-50">Los Angeles</p>
                  </Radio>
                  <Divider />
                  <Radio value="Hong Kong" description={<div className="text-gray-500 leading-[.5rem] p-2"><p>710 E Diao St</p><br/><p>Hong Kong 1234</p></div>}>
                    <p className="text-gray-900 dark:text-slate-50">Hong Kong</p>
                  </Radio>
                  <Divider />
                  <Radio value="Prague" description={<div className="text-gray-500 leading-[.5rem] p-2"><p>14 E 3rd St</p><br/><p>Prague, CZ 1273</p></div>}>
                    <p className="text-gray-900 dark:text-slate-50">Prague</p>
                  </Radio>
                  <Divider />
                  <Radio value="Buenos Aires" description={<div className="text-gray-500 leading-[.5rem] p-2"><p>142 S Central St</p><br/><p>Buenos Aires, AR 123</p></div>}>
                    <p className="text-gray-900 dark:text-slate-50">Buenos Aires</p>
                  </Radio>
                  <Divider />
                </RadioGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onPress={onClose}>
                  Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Store