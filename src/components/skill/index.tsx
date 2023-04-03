

export default function Skill({skill}) {
    const url=skill.url;
    const name=skill.name;
    return (
  <>

              <div className= "col-3 skill">
                <div className= "skillItems"><img className="skillImage" src={url} /></div>
                <div className= "skillItems">{name}</div>
              </div>
        
  
  </>
    )
  }
  