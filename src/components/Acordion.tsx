import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import { useDispatch } from "react-redux"
import { getSigleUser } from "../store/slices/users/fetchUsers"

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
 const dispatch = useDispatch()
 const fetchUser = (id) => dispatch(getSigleUser(id))

 const clickHandler = (index: number) => indexExpand === index ? setIndexExpand(-1) : setIndexExpand(index)
 const renderItems = items.map((item: SingleContentType, index: number) => {
  const icon = <span>{indexExpand === index ? <GoChevronDown /> : <GoChevronLeft />}</span>
  return <div key={item.id} >
   <div className="flex p-3 bg-gray-50 border-b items-center cursoir-pointer justify-between" onClick={() => clickHandler(index)}>
    {item.name}
    {icon}
   </div >
   {indexExpand === index && <div onClick={() => fetchUser(item.id)} className="border-b p-5">{item.description
   }</div>}
  </div>
 }
 )
 return (
  <div className="border-x border-t rounded">
   {renderItems}
  </div>
 )
}

export default Acordion
