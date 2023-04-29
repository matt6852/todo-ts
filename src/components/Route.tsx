import { NavigationContextType, useNavigationHook } from "../context/navigation"


type RouteType = {
 to: string
 children?: JSX.Element | JSX.Element[] | undefined | null
}

function Route({ children, to }: RouteType) {
 const { currentPath } = useNavigationHook() as NavigationContextType
 if (currentPath === to) {
  return <>{children}</>
 }
 return null
}


export default Route