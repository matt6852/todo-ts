import Link from "./components/Link"
import Route from "./components/Route"
import SideBar from "./components/SideBar"
import AcordionPage from "./pages/AcordionPage"
import ButtonPage from "./pages/ButtonPage"
import DropDownPage from "./pages/DropDownPage"



function App() {

  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <div>
        <SideBar />
      </div>
      <div className="col-span-5">
        <Route to="/accordion">
          <AcordionPage />
        </Route>
        <Route to="/">
          <DropDownPage />
        </Route>
        <Route to="/buttons">
          <ButtonPage />
        </Route>
      </div>

    </div>
  )
}

export default App
