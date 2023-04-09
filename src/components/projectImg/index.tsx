import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
export default function ProjectImg({ images }: any) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2500)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  if (images.length>1) {

    console.log("/" + images[0].url);
    return (
      <>

        <div ref={sliderRef} className="keen-slider">
          {images.map((image: any) => {
            return (<div className="keen-slider__slide imgCarousel" key={image.id}><Image src={"/" + image.url}  alt={image.name} 
            layout="fill"
            objectFit="contain" /></div>)
          })}

        </div>
      </>
    )

  }
if(images.length=1){
  return(
  <div> {images.map((image: any) => {
    return (<div className="keen-slider__slide imgCarousel" key={image.id}><Image src={"/" + image.url}  alt={image.name} 
    layout="fill"
    objectFit="contain" /></div>)
  })}
</div>)
}
  else {
    return (<>Image not found</>)
  }
}