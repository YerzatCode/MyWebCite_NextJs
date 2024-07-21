import useSideBar from "@/store/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const link = [
  {
    href: "/",
    name: "Main",
  },
  {
    href: "/blog",
    name: "Blog",
  },
  {
    href: "/ref",
    name: "Reference",
  },
  {
    href: "/cal",
    name: "Calculate",
  },
  {
    href: "/job",
    name: "Job",
  },
]

function LinkList() {
  const { open, setOpenClose } = useSideBar((state) => state)
  const path = usePathname()
  let className = ""

  return (
    <>
      {link.map((item) => {
        if (item.href == path) {
          className = "text-red hover:text-white border-b-2 border-red-500"
        } else {
          className = ""
        }
        return (
          <Link
            key={item.name}
            className={`text-xl hover:bg-red duration-500 p-3 pl-5 ${className}`}
            onClick={setOpenClose}
            href={item.href}>
            {item.name}
          </Link>
        )
      })}
    </>
  )
}

export default LinkList
