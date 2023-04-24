import React from 'react'
import classNames from "classnames";

import { NavigationContextType, useNavigationHook } from '../context/navigation'

type LinkType = {
 to: string,
 children?: JSX.Element | JSX.Element[] | undefined | string,
 className: string,
 activeClassName: string
}
function Link({ to, children, className, activeClassName }: LinkType) {
 const { navigation, currentPath } = useNavigationHook() as NavigationContextType
 const handleNavigation = (event: React.MouseEvent) => {
  event.preventDefault()
  navigation(to)
 }
 const classes = classNames("text-blue-500",
  className,
  currentPath === to && activeClassName)
 return (
  <a href={to} className={classes} onClick={handleNavigation}>{children}</a>
 )
}

export default Link