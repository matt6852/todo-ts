import Acordion from '../components/Acordion'

function AcordionPage() {
 const items = [
  { label: "Some label", content: "Some Content", id: 1 },
  { label: "Some label 2", content: "Some Content 2", id: 2 },
  { label: "Some label 3", content: "Some Content 3", id: 3 }]
 return (
  <div>
   <Acordion items={items} />
  </div>
 )
}

export default AcordionPage