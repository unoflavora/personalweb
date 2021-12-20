import { useRef, useEffect } from "react";
import { gsap } from 'gsap'

function useAnimate(ref, start=true) {
  const timeline = useRef()
  useEffect(() => {
    if (start) {
      timeline.current = gsap.timeline()
      .from(ref.current, {attr:{viewBox: "0 0 0 0"}})
      .to(ref.current, {attr:{viewBox: "0 0 43.45 6.85"}})
      .duration(3)
    }    
  }, [start])

  return timeline.current

}

export default useAnimate 