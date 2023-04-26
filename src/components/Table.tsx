import { RenderType } from "../pages/TablePage"

type SingleItem = {
 name: string,
 color: string,
 id: number,
 score: number
}
type TableProps = {
 data: SingleItem[], config:
 { label: string, render: (item: RenderType) => any }[]
}

const Table = ({ data, config }: TableProps) => {

 const rednderHeaders = config.map((col) => {
  return <th key={col.label}>{col.label}</th>
 })

 const renderRows = data.map((item) => {
  const renderCells = config.map((col) => <td key={col.label} className="p-3">{col.render(item)}</td>)
  return <tr className="border-b" key={item.id}>
   {renderCells}
  </tr>
 })
 return (
  <table className="table-auto border-spacing-2">
   <thead>
    <tr className="border-b-2">
     {rednderHeaders}
    </tr>
   </thead>
   <tbody>
    {renderRows}
   </tbody>
  </table>
 )
}

export default Table
