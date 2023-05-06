import Link from '../components/Link'

function SideBar() {
 const links = [
  { label: "Accordion", path: "/accordion" },
  { label: "DropDown", path: "/" },
  { label: "Buttons", path: "/buttons" },
  { label: "Modal", path: "/modal" },
  { label: "Table", path: "/table" },
  { label: "Counter", path: "/counter" },
  { label: "Cars", path: "/cars" }
 ]

 const renderLinks = links.map((link) => <Link activeClassName="font-bold border-l-4 border-blue-500 pl-2" className="mb-3" key={link.label} to={link.path}>{link.label}</Link>)
 return (

  <div className='sticky top-0  flex flex-col items-start'>
   {renderLinks}
  </div>

 )
}

export default SideBar