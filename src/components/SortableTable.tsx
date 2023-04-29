import { useState } from 'react'
import Table, { TableProps } from './Table'
import { RenderType } from '../pages/TablePage'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
type SortOrderType = null | "asc" | "desc"
type SortByType = null | "name" | "score" | string
const SortableTable = (props: TableProps) => {
 const { config, data } = props
 const [sortOrder, setSortOrder] = useState<SortOrderType>(null)
 const [sortBy, setSortBy] = useState<SortByType>(null)
 const handleClick = (label: SortByType) => {
  if (sortBy && sortBy !== label) {
   setSortBy(label)
   setSortOrder("asc")
   return
  }
  if (sortOrder === null) {
   setSortOrder("asc")
   setSortBy(label)
  } else if (sortOrder === "asc") {
   setSortOrder("desc")
   setSortBy(label)
  } else if (sortOrder === "desc") {
   setSortOrder(null)
   setSortBy(null)

  }
 }
 const renderIcons = (label: string, sortBy: SortByType, sortOrder: SortOrderType) => {
  if (label !== sortBy) {
   return <div>
    <GoChevronUp />
    <GoChevronDown />
   </div>
  }
  if (sortOrder === null) {
   return <div>
    <GoChevronUp />
    <GoChevronDown />
   </div>
  } else if (sortOrder === "asc") {
   return <GoChevronUp />
  } else if (sortOrder === "desc") {
   return <GoChevronDown />
  }
 }
 const updatedConfig = config.map((coulmn) => {
  if (!coulmn.sortValue) {
   return coulmn
  } else {
   return {
    ...coulmn,
    header: () => <th onClick={() => handleClick(coulmn.label)}>
     <div className='flex items-center cursor-pointer'>
      {renderIcons(coulmn.label, sortBy, sortOrder)}
      {coulmn.label}

     </div>

    </th>
   }
  }
 })
 let sortedData = data
 if (sortBy && sortOrder) {
  let sortValue: any
  const found = config.find((item) => item.label === sortBy)
  if (found) {
   sortValue = found.sortValue
  }
  sortedData = [...data].sort((a, b) => {
   const valA = sortValue(a)
   const valB = sortValue(b)
   const reversOrder = sortOrder === "asc" ? 1 : -1
   if (typeof valA === "string") {
    return valA.localeCompare(valB) * reversOrder
   } else {
    return (valA - valB) * reversOrder
   }
  })
 }
 return (
  <Table {...props} config={updatedConfig} data={sortedData} />
 )
}

export default SortableTable
