'use client'
import { useMount } from '@/hooks/useMount';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { FaShoppingCart } from 'react-icons/fa'
import UnmountedImage from '@/components/UnmountedImage';

/* *
 * TODO - Currently Placeholder
 *
 * Users will have the ability to add items to Cart and view them
 * or buy them here
 * *******************************************************************/
function Cart() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { mounted } = useMount()

  if (!mounted) return <UnmountedImage />
  
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