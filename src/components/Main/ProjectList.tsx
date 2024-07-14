import { ArrowRight } from "lucide-react"
import Link from "next/link"

function ProjectList() {
  return (
    <div className="flex flex-col gap-y-5 w-[32%] max-lg:w-[49%] max-sm:w-full max-sm:gap-y-2 z-10">
      <div className="w-full bg-dark flex justify-center items-center">
        <div className="w-5/6 h-72 bg-black shadow-lg shadow-grey my-10 z-10"></div>
      </div>
      <h2 className="font-bold text-xl max-sm:mt-2">The Vintage</h2>
      <Link href="/" className="flex items-center text-red">
        KNOW MORE <ArrowRight color={"#EA1E3F"} size={24} />
      </Link>
    </div>
  )
}

export default ProjectList
