import Route from "./components/Route"
import SideBar from "./navigation/SideBar"
import AcordionPage from "./pages/AcordionPage"
import ButtonPage from "./pages/ButtonPage"
import CarsPage from "./pages/CarsPage"
import CounterPage from "./pages/CounterPage"
import DropDownPage from "./pages/DropDownPage"
import ModalPage from "./pages/ModalPage"
import TablePage from "./pages/TablePage"
import UsersPage from "./pages/UsersPage"
import PokeTable from "./pages/TablePagePoks"
import Query from "./pages/Query"
import UnsplashPage from "./pages/UnsplashPage"



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
        <Route to="/table">
          <TablePage />
        </Route>
        <Route to="/counter">
          <CounterPage />
        </Route>
        <Route to="/cars">
          <CarsPage />
        </Route>
        <Route to="/users">
          <UsersPage />
        </Route>
        <Route to="/poks">

          <PokeTable />
        </Route>
        <Route to="/query">
          <Query />
        </Route>
        <Route to="/unsplash">
          <UnsplashPage />
        </Route>
      </div>

    </div>
  )
}

export default App
