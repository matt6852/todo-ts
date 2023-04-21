import { useEffect, useRef, useState } from "react"


type PropsType = {
 items: OptionType[]
}
type OptionType = {
 label: string,
 value: string,
 id: number
}

function DropDown({ items }: PropsType) {
 const [isOpen, setIsOpen] = useState<Boolean>(false)
 const [selected, setSeclected] = useState<OptionType | null>(null)
 const ref = useRef(null)
 const closeAndSelect = (item: OptionType) => {
  setSeclected(item)
  setIsOpen(false)
 }

 useEffect(() => {
  const handler = (event: Event) => {
   //@ts-ignore
   if (!ref?.current.contains(event.target)) {
    setIsOpen(false)
   }
  }
  document.addEventListener("click", handler)
  return () => document.removeEventListener("click", handler)
 }, [])
 const renderOption = items.map((item) => {
  return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => closeAndSelect(item)} key={item.value}>{item.label}</div>
 })
 return (
  <div ref={ref} className="my-div">
   <div onClick={() => setIsOpen(!isOpen)}>
    {selected?.label || "Select ..."}
   </div>
   {isOpen && renderOption}
  </div>
 )
}

export default DropDown