"use client"
import useSideBar from "@/store/sidebar"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

function Header() {
  const { open, setOpenClose } = useSideBar((state) => state)
  const path = usePathname()
  return (
    <div className="bg-dark row-span-1 flex items-center pl-4 pr-4 justify-between py-5 xl:hidden">
      <h2>{path}</h2>
      <>
        {!open ? (
          <div className="xl:hidden">
            <h1 onClick={setOpenClose}>
              <Menu size={32} />
            </h1>
          </div>
        ) : (
          <div className="xl:hidden max-sm:hidden" onClick={setOpenClose}>
            <X size={32} />
          </div>
        )}
      </>
    </div>
  )
}

export default Header
