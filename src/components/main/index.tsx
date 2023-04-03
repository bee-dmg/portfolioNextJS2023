import React from "react"

import 'bootstrap/dist/css/bootstrap.css'
import NavBar from "../navbar"
import { Container } from "react-bootstrap"
import Splash from "../splash"
import Title from "../title"
import Project from "../project"
import projects from "@/data/projects"
import skills from "@/data/skills"
import Skills from "../skills"
import About from "../about"
import { v4 as uuidv4 } from 'uuid';

export default function Main() {

  const titles = ["Projects","Skills","About", "Resume"]
  return (
<>
  
    <NavBar />
    <Container>
      <Splash />
      <Title title={titles[0]} />
      {/* map all projects out */}
      {projects.map((project)=> <Project key={uuidv4()} project={project}/>)}
      <Title title={titles[1]} />
      {/* pass along skills to be mapped out in skill comp */}
      <Skills skills={skills}/>
      <Title title={titles[2]} />
      <About />
      <Title title={titles[3]} />
    </Container>

</>
  )
}
