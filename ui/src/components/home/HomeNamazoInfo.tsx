import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import NamazoImage from "../NamazoImage"

/* * 
 * Home Page Component that displays namazo information
 * *******************************************************************/
function HomeNamazoInfo() {
  return (
    <section className="flex flex-col w-screen h-page justify-between snap-center">
      <div className="flex justify-center items-center h-16 bg-gradient-to-b from-[#484848] to-[#282828]">
        <IoIosArrowUp className="text-black dark:text-white " size={32} />
      </div>
      <div className="w-screen h-page flex items-center justify-evenly">
        <p className="w-1/2 text-black dark:text-white text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita doloribus ipsam temporibus, vitae nihil ad at, eveniet iusto corrupti tempore obcaecati accusantium natus tempora modi dolorum officiis aperiam culpa?
        </p>
        <NamazoImage link={false} type="icon" />
      </div>
      <div className="flex justify-center items-center h-16 bg-gradient-to-b from-[#282828] to-[#484848]">
        <IoIosArrowDown className="text-black dark:text-white " size={32} />
      </div>
    </section>
  )
}


export default HomeNamazoInfo