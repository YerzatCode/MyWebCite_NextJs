function Container({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-black h-full row-span-10 overflow-x-scroll rounded-t-sm xl:pt-4 max-xl:row-span-9">
      {children}
    </div>
  )
}

export default Container
