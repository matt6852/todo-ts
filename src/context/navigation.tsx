import { createContext, useContext, useEffect, useState } from "react";

export interface NavigationContextType {
 currentPath: string
 navigation: (to: string) => void

}
const NavigatoonContext = createContext<NavigationContextType | null>(null)

type Props = {
 children?: JSX.Element | JSX.Element[]
}
const useNavigationHook = () => {
 return useContext(NavigatoonContext)
}

const NavigationProvider = ({ children }: Props) => {
 const [currentPath, setCurrentPath] = useState(window.location.pathname)

 useEffect(() => {
  const navigationHandler = () => {
   const path = window.location.pathname
   setCurrentPath(path)

  }
  window.addEventListener("popstate", navigationHandler)
  return () => removeEventListener("popstate", navigationHandler)
 }, [])
 const navigation = (to: string) => {
  window.history.pushState({}, "", to)
  setCurrentPath(to)
 }
 const valueToShare: NavigationContextType = { currentPath, navigation }


 return <NavigatoonContext.Provider value={valueToShare}>
  {children}
 </NavigatoonContext.Provider>
}

export default NavigationProvider
export { useNavigationHook }