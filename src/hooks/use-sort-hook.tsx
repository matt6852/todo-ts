import { useState } from 'react'

type SortOrderType = null | "asc" | "desc"
type SortByType = null | "name" | "score" | string

const useSortableHook = ({ data, config }: any) => {
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
 return {
  sortedData, handleClick,
  sortBy, sortOrder
 }

}

export default useSortableHook