
export default function ProjectImg({image}:any){
    if(image)
    return(<>
    
    <div className="carousel-cell"><img
              src={image.url} className="transparency img-fluid imgCarousel"
               /></div></>)
               else{
                return(<>Image not found</>)
               }
}