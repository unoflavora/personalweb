import { useEffect,useRef } from "react";
import gsap from "gsap";
function StackBox({children, title, desc}) {
  const divRef = useRef()
  const prevRef = useRef()
  const tl = useRef()
  const tl2 = useRef()

  useEffect(() => {
    tl.current = gsap.timeline({defaults: {ease: "none"}})
      .set(divRef.current, {x: -300})
      .to(divRef.current, {x: 300})      
      .duration(8)
      .repeat(-1)
  })

  return (
    <div className='border-2 w-64  overflow-hidden bg-opacity-60 bg-gradient-to-b from-gray-100 to-yellow-50  py-5'>

        <div ref={divRef} className='flex items-center justify-center gap-10 w-max'>
          {children}
        </div>
        

        <h1 className='font-bold text-xl mt-5'>{title}</h1>
        <p className='text-gray-500 px-2'>{desc}</p>
    </div>
  );
}

export default StackBox;