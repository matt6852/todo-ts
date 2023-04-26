import React from 'react'
import Table from '../components/Table'
type TableConfigItem = {
 label: string,
 render: (item: RenderType) => string | number | null | JSX.Element | JSX.Element[]
}
export type RenderType = {
 name: string,
 color: string,
 score: number
}

const TablePage = () => {
 const items = [
  { name: "apple", color: "bg-orange-500", id: 1, score: 5 },
  { name: "orange", color: "bg-yellow-500", id: 2, score: 4 },
  { name: "banana", color: "bg-green-500", id: 3, score: 1 },
  { name: "lime", color: "bg-red-500", id: 4, score: 19 },
  { name: "melon", color: "bg-blue-500", id: 5, score: 10 },
  { name: "watermelon", color: "bg-red-100", id: 6, score: 6 }]

 const config: TableConfigItem[] = [
  {
   label: "name",
   render: (fruit: RenderType) => fruit.name
  },
  {
   label: "color",
   render: (fruit: RenderType) => <div className={`p-3 m-2 ${fruit.color}`}></div>

  },
  {
   label: "score",
   render: (fruit: RenderType) => fruit.score

  }
 ]

 return (
  <div>
   <Table data={items} config={config} />
  </div>
 )
}

export default TablePage
