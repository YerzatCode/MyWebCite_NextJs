import Image from "next/image"

function Banner() {
  return (
    <div className="bg-gradient-to-l from-red-500 to-black  w-full h-96 bg-no-repeat bg-cover bg-center flex max-sm:h-auto max-sm:flex-col max-sm:items-center z-10">
      <div className="mx-16 my-14 flex flex-col gap-4 max-sm:gap-1 max-sm:order-2 max-sm:text-center">
        <h1 className=" font-bold text-[40px] max-sm:text-[26px]">
          Web Developers
        </h1>
        <p className="text-lg w-10/12 max-sm:text-[18px] max-sm:w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque
          sequi praesentium suscipit tempora voluptate nemo tempore dolores.
          Nesciunt asperiores voluptatum eligendi aspernatur officiis sit quae
          numquam odit ipsam? Maiores.
        </p>
        <div className="flex mt-5 gap-4 h-14 max-sm:justify-center">
          <button className="bg-red h-full px-5 rounded-xl text-lg font-semibold shadow-dark shadow-lg hover:scale-105 duration-300">
            View resume
          </button>
          <button className="bg-dark border-red-500 border-[1px] h-full px-5 rounded-xl font-black text-red shadow-red-500 shadow-md hover:scale-[1.03] duration-200">
            Me jobs
          </button>
        </div>
      </div>
      <div className="mr-16 mt-5 max-sm:order-1 max-sm:w-8/12 max-sm:mx-4 max-lg:mr-4 max-lg:w-full flex items-end">
        <Image src="/avatar.svg" alt="#" width={755} height={500} />
      </div>
    </div>
  )
}

export default Banner
