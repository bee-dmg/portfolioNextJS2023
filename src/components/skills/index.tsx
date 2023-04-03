
import Skill from "../skill"
import { Container } from "react-bootstrap"
export default function Skills({skills}:any) {
  return (
<>
<div className= "row justify-content-center">
        <div className= "col-12 col-sm-12 col-md-12 col-xl-12 align-self-center">
          <div className= "row skillHolder">

            {skills.map((skill:any)=>{return <Skill key={skill.id} skill={skill}/>})}
    
          </div>
        </div>
      </div>


</>
  )
}
