import DropDown from "./components/DropDown"



function App() {
  const items = [
    { label: "Some label", value: "value1", id: 1 },
    { label: "Some label 2", value: "value2", id: 2 },
    { label: "Some label 3", value: "value3", id: 3 }
  ]
  return (
    <div >
      <DropDown items={items} />
    </div>
  )
}

export default App
