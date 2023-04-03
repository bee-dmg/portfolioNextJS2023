import React from "react"
import { v4 as uuidv4 } from 'uuid';
import ProjectImg from "../projectImg"

export default function Project({project}:any) {

    const name = project.name
    const description=project.description
    const info = project.info
    const github_url=project.github_url
    const url = project.url
    const images = project.images
  return (
<>
<div className="row projectItem">

<div className="col-12 col-lg-6 ">


  <div className="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true }'>
    {/* array of images from object, map over images and display them all as carousel-cells */}
             
<div className="carousel-cell">
    {images.map((image:any)=> <ProjectImg key={uuidv4()} image={image} />)}
           </div>
           
         
        

              
                
            
              </div>
          
        </div>
        <div className="col-12 col-lg-6 ">
          <div className="row">
            <div className="col-8">
              <div className="bottom-left">{name}</div>
            </div>
            <div className="col-4">
              <div className="top-right">{info}</div>
            </div>
          </div>
          <div className="description">
           {description} </div>
          <div className="row">
            <div className="col-6 col-sm-6">

              <div className="github">
                <a href={github_url} target="_blank">
                  Github
                </a>
              </div>
            </div>
            <div className="col-6 col-sm-6">

              <div className="live">
                <a href={url} target="_blank">
                  Live Site</a>
              </div>

            </div>










            
          </div>

        </div>
    
    </div>
    
      


</>
  )
}
