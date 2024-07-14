import Banner from "@/components/Main/Banner"
import Contact from "@/components/Main/Contact"
import Experience from "@/components/Main/Experience"
import ProjectList from "@/components/Main/ProjectList"
import Skill from "@/components/Main/Skill"
import { Brush, Gamepad2, PanelsTopLeft, Presentation } from "lucide-react"
import Link from "next/link"

export interface ItemSkillT {
  title: string
  description: string
  icon: React.ReactNode
}

const skillList: ItemSkillT[] = [
  {
    title: "Fullstack Developers",
    description: "Lorem ipsum is simply text of the perinting type",
    icon: <PanelsTopLeft size={160} color={"#EA1E3F"} />,
  },
  {
    title: "UI Designer",
    description: "Lorem ipsum is simply text of the perinting type",
    icon: <Brush size={160} color={"#EA1E3F"} />,
  },
  {
    title: "Game Developer",
    description: "Lorem ipsum is simply text of the perinting type",
    icon: <Gamepad2 size={160} color={"#EA1E3F"} />,
  },
  {
    title: "Project Manager",
    description: "Lorem ipsum is simply text of the perinting type",
    icon: <Presentation size={160} color={"#EA1E3F"} />,
  },
]

export default function Home() {
  return (
    <>
      <div className="w-1/2 h-1/2 bg-dark top-1/4 right-0 absolute opacity-45 "></div>
      <div className="flex flex-col w-full  z-10">
        <Banner />
        <div className="flex pt-5 gap-2 max-2xl:gap-0 max-lg:flex-wrap justify-around">
          {skillList.map((item) => (
            <Skill item={item} />
          ))}
        </div>

        <h1 className="font-bold text-4xl text-center my-4 z-10 mt-12">
          My result
        </h1>
        <Experience />
        <div className="w-full border-dark border-2 my-5"></div>
        <div className="flex justify-between my-5 mx-4">
          <div className="z-10">
            <h1 className="font-bold text-2xl">FEATURED PROJECT</h1>
            <p className="text-grey text-sm">
              Lorem ipsum is simply text of the perinting type
            </p>
          </div>
          <button className="bg-red px-5 rounded-lg z-10">VIEW ALL</button>
        </div>
        <div className="mt-5 px-4 flex w-full flex-wrap justify-between gap-x-2 max-sm:gap-y-5">
          <ProjectList />
          <ProjectList />
          <ProjectList />
        </div>
        <Contact />
        <div className="flex gap-12 justify-center">
          <Link href={"./"} className="font-bold text-xl">
            Home
          </Link>
          <Link href={"./"} className="font-bold text-xl">
            About me
          </Link>
          <Link href={"./"} className="font-bold text-xl">
            Projects
          </Link>
          <Link href={"./"} className="font-bold text-xl">
            Learing
          </Link>
          <Link href={"./"} className="font-bold text-xl">
            Interestink
          </Link>
        </div>
        <footer className="w-full h-24 bg-dark mt-16 flex items-center justify-center">
          <h1 className="font-light">Created @YerzatCode</h1>
        </footer>
      </div>
    </>
  )
}
