import { ItemSkillT } from "@/app/page"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const Skill: React.FC<{ item: ItemSkillT }> = ({ item }) => {
  return (
    <div className="w-3/12 h-[420px] bg-dark border-red-500 text-black rounded-lg shadow-red-500 scale-95 hover:scale-100 duration-200 p-5 flex flex-col gap-6 max-lg:w-6/12 max-sm:w-full border-b-8">
      <div>{item.icon}</div>
      <h1 className="font-bold text-2xl">{item.title}</h1>
      <p>{item.description}</p>
      <Link href={"/"} className="text-red flex gap-2">
        Show more <ArrowRight color={"#EA1E3F"} />
      </Link>
    </div>
  )
}

export default Skill
