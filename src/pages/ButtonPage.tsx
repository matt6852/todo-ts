import React from 'react'
import Button from '../components/Button'
import { GoBell, GoAlert, GoBook, GoBug } from "react-icons/go"

function ButtonPage() {
 return (
  <div>ButtonPage
   <div>
    <Button primary onClick={() => console.log("click")
    } > <GoBell />click</Button>
   </div>
   <div>
    <Button secondary  >  <GoAlert />test</Button>
   </div>
   <div>
    <Button outline warning > <GoBook />  test2</Button>
   </div>
   <div>
    <Button success rounded >  <GoBell />test3</Button>
   </div>
   <div>
    <Button danger >   <GoBug />test4</Button>
   </div>
  </div>
 )
}

export default ButtonPage