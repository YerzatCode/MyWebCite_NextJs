"use client"
import useSideBar from "@/store/sidebar"
import { X } from "lucide-react"
import Image from "next/image"
import LinkList from "./LinkList"
import SocialList from "./SocialList"

function Sidebar() {
  const { open, setOpenClose } = useSideBar((state) => state)

  var style = open ? "max-xl:left-0" : "max-xl:left-[-100%]"

  return (
    <div
      className={`bg-dark col-span-1 z-40 row-span-6 p-2 flex flex-col justify-between max-xl:absolute max-sm:w-full duration-500 max-sm:h-screen ${style} `}>
      <div className="absolute right-5 top-5 sm:hidden" onClick={setOpenClose}>
        <X size={32} />
      </div>
      <div>
        <div className="flex flex-col items-center gap-5 p-5">
          <Image
            src="/avatar.svg"
            alt=""
            className="bg-black rounded-full border-2 border-red p-2 "
            width={128}
            height={128}
          />
          <h1 className="text-2xl font-black">Yerzat Pazylkhanov</h1>
          <div className="flex gap-5 max-sm:hidden">
            <SocialList />
          </div>
        </div>
        <div className="pt-5 flex flex-col max-sm:text-center">
          <LinkList />
        </div>
      </div>
      <footer className="flex flex-col text-center mb-5 items-center gap-3 ">
        <div className="flex gap-5 sm:hidden">
          <SocialList />
        </div>
        @YerzatCode
      </footer>
    </div>
  )
}

export default Sidebar
