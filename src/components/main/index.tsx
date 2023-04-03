import React from "react"

import 'bootstrap/dist/css/bootstrap.css'
import NavBar from "../navbar"
import { Container } from "react-bootstrap"
import Splash from "../splash"
export default function Main() {
  return (
<>
  
    <NavBar />
<Container>
  <Splash />
</Container>

</>
  )
}
