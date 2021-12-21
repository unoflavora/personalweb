import Line from '../styles/line.svg'
import Image from 'next/image'
import { useRef } from 'react'
import useAnimate from './hooks/useAnimate'
import AnimatedNumber from "animated-number-react";

export default function Header(props) {
  const lineRef = useRef()
  useAnimate(lineRef)

  const stats = [
    { num: 1, desc:'Years Experience' },
    { num: 8, desc: 'Completed Projects' },
    { num: 3, desc: 'Live Projects' },
    { num: 3, desc: 'Programming Language' }
  ]
  
  const nav = ['Home', 'Works', 'Expertise', 'Contact']
  const executeScroll = (ref) => ref.current.scrollIntoView({behavior: 'smooth' })    

  
  return(
    <div className='flex flex-col md:gap-14 lg:items-center w-full px-5 xl:px-36 xl:h-screen 2xl:h-full'>
      <div className='md:grid md:grid-cols-2 lg:items-center gap-10 xl:gap-24 '>
        <div className='hidden md:block overflow-hidden bg-yellow-200 rounded-b-full md:pt-20 '>  
          <Image className='' src='/foto.png' alt='foto imam' width={300} height={500}/>
        </div>
        <div className='flex flex-col md:gap-10 lg:self-start justify-between'>
          <nav className='flex gap-5 py-4 md:flex-row flex-wrap justify-between w-full md:py-10 '>
            {nav.map((item, index) => 
              <button onClick={() => executeScroll(props[item])} className='font-semibold hover:opacity-70  md:text-lg' key={index}>
                  {item}
              </button>
            )}
          </nav>
          
          <div className='flex justify-center w-full md:hidden'>
          <div className='h-56 w-56  pt-5  bg-yellow-200 rounded-b-full lg:py-64'>  
            <Image className='rounded-full' src='/foto.png' alt='foto imam' width={180} height={200}/>

           </div>
          </div>

          <div className='flex flex-col gap-2 md:gap-14 text-left px-0'>
            <div className='md:gap-5'>
            <h1 className='text-blue-400 text-xl mt-10 md:mt-0 font-semibold'>Imam Syahid Hudzaifah</h1>
            <h1 className='relative text-5xl break-all md:break-normal xl:text-6xl tracking-wide leading-tight font-bold'>
              <span className='hidden md:inline'>Self-Taught </span> Web <span className='inline-block md:hidden'> Dev</span>
              <span className='hidden md:inline'> Developer</span>
              <div className='absolute w-1/2 sm:w-1/3 md:w-4/5 lg:w-1/2 xl:w-80'>
                <Line ref={lineRef}/>
              </div>              
            </h1>
            </div>

            <p className='leading-loose text-lg font-semibold'>
              <span className='hidden md:inline'>
              To be a Professional Web Developer is my dream. 
              </span> I hope to make an impact in an important future of digital world. 
              Specialized in MERN Stack, I have learned a lot, and love to learn a lot more
              <a target={'_blank'} href="/Resume_Imam_Syahid_Hudzaifah.pdf" className='block w-fit hover:bg-blue-400 bg-blue-500 text-white  mt-5 px-5 py-2 text-lg font-semibold rounded-xl  '>View My Resume</a></p>
            
          </div>
        </div>
      </div>
      <ul className='grid grid-cols-2 md:grid-cols-4 xl:px-24 gap-1 py-10 lg:pt-0 xl:pb-24'>
        {stats.map((item, index) => {
          return(
            <li key={index} className='flex items-center justify-start text-left gap-4'>
              <AnimatedNumber
                className='font-bold text-6xl text-yellow-300'
                duration={2000}
                formatValue = {(value) => value.toFixed(0)}
                value={item.num}
              />
              <p className='w-1/5'>{item.desc}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}