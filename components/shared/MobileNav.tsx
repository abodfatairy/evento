import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import Navitems from "./Navitems"

const MobileNav = () => {
  return (
    <nav className=" md:hidden">

      <Sheet>
        <SheetTrigger className=" align-middle">
          <Image alt="" src='/assets/icons/menu.svg' width={24} height={24} />
        </SheetTrigger>

        <SheetContent className=" flex flex-col gap-6 bg-white md:hidden">
          <Image src='/assets/images/logo.svg' width={128} height={83} alt="logo" />
          <Separator className=" border border-gray-50" />
          <Navitems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav