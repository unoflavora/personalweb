import Line from '../styles/line.svg'
import {FaReact, FaNodeJs} from 'react-icons/fa'
import {DiSass} from 'react-icons/di'
import {SiNextdotjs, SiTailwindcss, SiMongodb, SiGreensock, SiPostgresql, SiWebpack} from 'react-icons/si'
import StackBox from './StackBox'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function Stack() {
const textRef = useRef()
gsap.registerPlugin(ScrollTrigger, TextPlugin);

useEffect(() => { 
  gsap.to(textRef.current.querySelector('#title'), {scrollTrigger: {
    trigger: textRef.current.querySelector('#title'),
    toggleActions: "restart none none none"
  },duration: 2, text: "React."})
}, [])


  return(
    <div ref={textRef} className='px-2 xl:px-36 py-10 pb-36 bg-yellow-50 flex flex-col gap-14'>
      <div>
      <h1 className='text-gray-400 font-bold text-lg py-5'>EXPERTISE</h1>
      <h1 className='text-5xl font-bold text-wider leading-normal xl:leading-tight'>
        The power of <span  id="title" className='title relative w-max text-blue-700'>
          <Line className='absolute w-full -bottom-5 xl:right-0'/>
        </span> Put To Work
      </h1> 
      </div>

      <div className='flex flex-col md:flex-row flex-wrap items-center pl-2 md:pl-0 gap-5 md:gap-10 lg:gap-20 w-full justify-center'>

        <StackBox title='Front End technologies' desc='I used to using many top-notch technologies that is based on Javascript'>
            <SiNextdotjs className='opacity-40' size={70}/>
            <FaReact className='text-[#61DBFB]' size={100}/>
            <SiWebpack className='opacity-40' size={70}/>
        </StackBox>

        <StackBox title='Latest UI Styling' desc='From the power of animation to the power of CSS extension, i can handle it.'>
            <SiGreensock className='opacity-40 text-green-800' size={80}/>
            <SiTailwindcss className='text-blue-400' size={100}/>
            <DiSass className='opacity-40' size={70}/>
        </StackBox>

        <StackBox title='Back End Technologies' desc='React can be powerful if it coupled with fast NodeJS and noSQL or Relational Databases'>
            <SiMongodb className='opacity-40' size={75}/>
            <FaNodeJs className='text-[#68A063]' size={90}/>
            <SiPostgresql className='opacity-40' size={75}/>
        </StackBox>
      
      </div>

    </div>
  )
}