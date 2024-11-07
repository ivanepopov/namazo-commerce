'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { FaShoppingCart } from 'react-icons/fa'

function Cart() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
      <Button isIconOnly onPress={onOpen} variant="light" color="default">
        <FaShoppingCart size={24}/>
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
                Your Shopping Cart
              </ModalHeader>
              <ModalBody className="text-black dark:text-white">
                Stuff
              </ModalBody>
              <ModalFooter className="flex flex-row justify-between">
                <Button color="secondary" onPress={onClose}>
                  Close
                </Button>
                <Button color="success">
                  Buy
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Cart