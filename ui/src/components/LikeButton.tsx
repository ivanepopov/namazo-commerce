import { Button } from "@nextui-org/react";
import { FaHeart } from "react-icons/fa";

function LikeButton() {
  return (
    <Button
      className="h-8 hover:text-[#F54180]"
      isIconOnly color="default"
      variant="flat"
      aria-label="Like"
      startContent={<FaHeart size={16}/>}/>
  )
}

export default LikeButton