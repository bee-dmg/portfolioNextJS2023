import React from "react"



export default function Title({title}:any) {
    

  return (
<>
<div className="row no-gutters col-12">
        <h2 className="title-font"><a id={title.toLowerCase()}>{title}</a></h2>
      </div>
 

</>
  )
}
