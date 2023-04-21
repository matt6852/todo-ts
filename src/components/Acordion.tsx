import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

type AcordionPropsType = {
 items: SingleContentType[]

}
type SingleContentType = {
 content: string,
 label: string,
 id: number
}
const Acordion: React.FC<AcordionPropsType> = ({ items }) => {
 const [indexExpand, setIndexExpand] = useState(0)
 const [counter, setCounter] = useState(0)
 const counterClick = () => {
  console.count("count");
  setTimeout(() => {

   // setCounter((oldCounter) => oldCounter + 1)
   setCounter(counter + 1)
  }, 4000)

 }
 const clickHandler = (index: number) => indexExpand === index ? setIndexExpand(-1) : setIndexExpand(index)
 const renderItems = items.map((item: SingleContentType, index: number) => {
  const icon = <span>{indexExpand === index ? <GoChevronDown /> : <GoChevronLeft />}</span>
  return <div key={item.id} >
   <div className="flex p-3 bg-gray-50 border-b items-center cursoir-pointer justify-between" onClick={() => clickHandler(index)}>
    {item.label}
    {icon}
   </div>
   {indexExpand === index && <div className="border-b p-5">{item.content}</div>}
  </div>
 }
 )
 return (
  <div className="border-x border-t rounded">
   {renderItems}
   <div>{counter}</div>
   <button onClick={counterClick}>+</button>
  </div>
 )
}

export default Acordion
