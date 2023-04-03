
import Skill from "../skill"
export default function Skills({skills}:any) {
  return (
<>
<div className= "row justify-content-center no-gutters">
        <div className= "col-12 col-sm-12 col-md-12 col-xl-12 align-self-center">
          <div className= "row skillHolder">

            {skills.map((skill:any)=>{return <Skill skill={skill}/>})}
    
          </div>
        </div>
      </div>


</>
  )
}
