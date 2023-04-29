import { useState } from 'react'
import Table, { TableProps } from './Table'
import { RenderType } from '../pages/TablePage'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import useSortableHook from '../hooks/use-sort-hook'
type SortOrderType = null | "asc" | "desc"
type SortByType = null | "name" | "score" | string
const SortableTable = (props: TableProps) => {
 const { config, data } = props
 const { sortedData, handleClick, sortBy, sortOrder } = useSortableHook({ data, config })
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
 return (
  <Table {...props} config={updatedConfig} data={sortedData} />
 )
}

export default SortableTable
