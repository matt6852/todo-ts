import Link from "./components/Link"
import Route from "./components/Route"
import SideBar from "./components/SideBar"
import AcordionPage from "./pages/AcordionPage"
import ButtonPage from "./pages/ButtonPage"
import DropDownPage from "./pages/DropDownPage"
import ModalPage from "./pages/ModalPage"



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
        <Route to="/modal">
          <ModalPage />
        </Route>
      </div>

    </div>
  )
}

export default App
