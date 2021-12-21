import { useRef, useState } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import useProjectAnimation from './hooks/useProjectAnimation';
import useAnimate from "./hooks/useAnimate";
import VisibilitySensor  from "react-visibility-sensor";
import Line from '../styles/line.svg'
import Image from 'next/image'
import Modal from './Modal';
import Projects from '../lib/project.json'


export default function Portofolio() {
  const [onView, setOnView] = useState(false)
  const [visibility, setVisibility] = useState(false)
  const lineRef = useRef();
  const row1 = useRef()
  const row2 = useRef()

  useAnimate(lineRef, onView)
  const tl = useProjectAnimation(row1, row2)
  
  return (
    <VisibilitySensor partialVisibility onChange={(isVisible) => setOnView(isVisible)}>
    <div>
      <Modal data={Projects['Projects'][visibility]} setVisibility={setVisibility} visibility={visibility}/>
    <div className='hidden xl:block'>
      <Controller>
      <Scene
        pin
        triggerHook={0}
        duration={1500}>
        {(progress, event) => {
          tl.current ? tl.current().progress(progress) : null
          return <div id='portofolio' className='text-left bg-yellow-100 w-full px-5 md:px-14 xl:px-36 py-14 grid xl:grid-cols-2 gap-14'>
          <div ref={row1} className='flex flex-col gap-10'>
            <h1 id="title" className='relative text-5xl leading-tight font-bold'>
              Some of My Portfolio
              <div className='absolute w-56'>
                <Line ref={lineRef}/>
              </div>
            </h1>
            <p className='leading-relaxed tracking-wider'>
              These are some of my past projects, 
              some of my work has been live but can only be accessed by an authenticated user.
              For all these projects, i do the backend and the frontend (with responsive design)
              with a little bit UI designing here and there.
              (Click the image for description of each project)
            </p>
          <div className='flex flex-col md:flex-row gap-10 xl:flex-col'>
          <button id='image1' onClick={() => setVisibility('Writer')} className='portfolio-item'>
            <Image loading="eager" className='rounded-3xl' src='/writer/writer.png' alt='rich text editor web app' width='1000' height='550'/>
            <h1 className='font-semibold'>Diktus Writer</h1>
          </button>
          <button id='image2' onClick={() => setVisibility('Memory')} className='portfolio-item'>
            <Image loading="eager" className='rounded-3xl' src='/memory/memory.png' alt='rich text editor web app' width='1000' height='550'/>
            <h1 className='font-semibold'>Memory Game</h1>
          </button>
          </div>
        </div>
        
        <div ref={row2} className='flex flex-col gap-10'>
          <button id='image3' onClick={() => setVisibility('Diktus')} className='portfolio-item'>
            <Image loading="eager" className='rounded-3xl' src='/diktus/diktus.png' alt='diktus app' width='1000' height='550'/>
            <h1 className='font-semibold'>Diktus Main App</h1>
          </button>
          <button id='image4' onClick={() => setVisibility('Feedback')} className='portfolio-item'>
            <Image loading="eager" className={`rounded-3xl`} src='/feedback/feedback.png' alt='feedback app' width='1000' height='550'/>
            <h1 className='font-semibold'>Feedback App</h1>
          </button>
        </div>

      </div>
        }}

      </Scene>
      </Controller>
    </div>
    <div className='xl:hidden'>
      <div id='portofolio' className='text-left bg-yellow-100 w-full px-5 md:px-14 xl:px-36 py-14 grid xl:grid-cols-2 gap-14'>
      <div  className='flex flex-col gap-10'>
        <h1 id="title" className='relative text-5xl leading-tight font-bold'>
          Some of My Portfolio
          <div className='absolute w-56'>
            <Line ref={lineRef}/>
          </div>
        </h1>
        <p className='leading-relaxed tracking-wider'>
          These are some of my past projects, 
          some of my work has been live but can only be accessed by an authenticated user.
          For all these projects, i do the backend and the frontend (with responsive design)
          with a little bit UI designing here and there.
          (Click the image for description of each project)
        </p>
      <div className='flex flex-col md:flex-row gap-10 xl:flex-col'>
      <button onClick={() => setVisibility('Writer')} className='portfolio-item'>
        <Image loading="eager" className='rounded-3xl' src='/writer/writer.png' alt='rich text editor web app' width='1000' height='550'/>
        <h1 className='font-semibold'>Diktus Writer</h1>
      </button>
      <button onClick={() => setVisibility('Memory')} className='portfolio-item'>
        <Image loading="eager" className='rounded-3xl' src='/memory/memory.png' alt='rich text editor web app' width='1000' height='550'/>
        <h1 className='font-semibold'>Memory Game</h1>
      </button>
      </div>
    </div>
    
    <div className='flex flex-col md:flex-row gap-10 xl:grid xl:grid-cols-2 place-content-center '>
        <button onClick={() => setVisibility('Diktus')} className='xl:col-span-2 portfolio-item'>
          <Image loading="eager" className='rounded-3xl' src='/diktus/diktus.png' alt='diktus app' width='1000' height='550'/>
          <h1 className='font-semibold'>Diktus Main App</h1>
        </button>
        <button onClick={() => setVisibility('Feedback')} className='xl:col-span-2 portfolio-item'>
          <Image loading="eager" className={`rounded-3xl`} src='/feedback/feedback.png' alt='feedback app' width='1000' height='550'/>
          <h1 className='font-semibold'>Feedback App</h1>
        </button>
    </div>

  </div>
</div>
</div>
   
    </VisibilitySensor>

  )
}