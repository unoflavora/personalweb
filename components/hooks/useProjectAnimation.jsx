import { useRef, useEffect } from "react"
import gsap from 'gsap'

function useProjectAnimation(row1, row2) {
  const images = gsap.utils.selector(row1)
  const images2 = gsap.utils.selector(row2)
  const tl = useRef()

  useEffect(() => {
    tl.current = () => gsap.timeline()
    .from(images('#image1'), {opacity: 0}, 0)
    .from(images('#image2'), {opacity: 0}, 250)
    .from(images2('#image3'), {opacity: 0}, 500)
    .from(images2('#image4'), {opacity: 0}, 750)
    .to(images('#image1'), {opacity: 1, duration: 250}, 0)
    .to(images2('#image3'), {opacity: 1, duration: 250}, 250)
    .to(images2('#image4'), {opacity: 1, duration: 250}, 500)
    .to(images('#image2'), {opacity: 1, duration: 250}, 750)
    .pause()
  }, [] )

  return tl
}

export default useProjectAnimation;