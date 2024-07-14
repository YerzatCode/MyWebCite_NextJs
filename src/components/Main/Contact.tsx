function Contact() {
  return (
    <div className="flex justify-center z-10 mt-10  ">
      <div className="w-[70%] bg-dark my-10 flex justify-between items-center px-14 py-8 max-sm:flex-col max-sm:w-[90%]">
        <div className="w-[70%] flex flex-col gap-y-2 max-sm:w-full">
          <h1 className="font-bold text-4xl">
            Let's work together on your next project
          </h1>
          <p className="text-grey">
            Lorem ipsum dolor sit amet. consectual adapsincg alt. sed do
            alousmed temper incididunt ut labana
          </p>
        </div>
        <div>
          <button className="bg-red px-8 py-3 rounded-sm m-16">Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
