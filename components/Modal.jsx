import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaMobileAlt, FaDesktop } from 'react-icons/fa'
import { AiOutlineCloseCircle, AiOutlineGithub, AiOutlineAppstore } from 'react-icons/ai'
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'


function Modal({data, visibility, setVisibility}) {
  const [mounted, setMounted] = useState(false)
  const [display, setDisplay] = useState('desktop')
  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  if(!visibility) {
    return null
  }

  const {title, description, imageDesktop, imageMobile, features, link, github} = data
  return mounted ? createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60">
      <div className="fixed top-1/2 md:top-1/3 lg:top-1/4 xl:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-screen flex justify-center p-4">
        <div className='bg-white w-full md:w-3/4 lg:w-1/2 rounded-xl p-4 border-2'>
          <button onClick={() => setVisibility(false)} className='w-full flex justify-end mb-2'><AiOutlineCloseCircle size={25}/></button>
          <Slide>
            {display === 'desktop' ? (imageDesktop).map((image, index) => (
              <div key={index}>
                <Image className='rounded-3xl' src={image} alt='rich text editor web app' width='1000' height='550'/>
              </div>
              )) : (imageMobile).map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image className='rounded-3xl' src={image} alt='rich text editor web app' width='180' height='300'/>
              </div>
            ))}
          </Slide>
          <div>
          <div className='technologies flex justify-between text-xs'>
              {features.map((feature, index) => (
                <div key={index} className='flex flex-col'>
                  <h1>{feature.title}</h1>
                  <h1 className="font-bold">{feature.item}</h1>
                </div>
              ))}       
            </div>


            <div className='w-full my-2 flex  gap-5 justify-center items-center'>
              <button onClick={()=>setDisplay('desktop')}>
                <FaDesktop className={display === 'desktop' ? 'text-yellow-500': 'text-gray-300'} size={30}/>
              </button>
              <button onClick={()=>setDisplay('mobile')}>
                <FaMobileAlt className={display === 'mobile' ? 'text-yellow-500': 'text-gray-300'} size={27}/>
              </button>
            </div>

            <div className="description">
              <h1 className="font-bold text-xl">{title}</h1>
              <p className="text-sm text-gray-400">{description}</p>
            </div>

            <div className='buttons flex flex-col md:flex-row gap-2 py-2 md:pt-5 text-center'>
              <a href={link} target={'_blank'} className="flex items-center justify-center gap-2  w-full rounded-xl py-2 font-semibold text-white bg-blue-500">
                <AiOutlineAppstore size={25}/> Visit App
              </a>
              <a href={github} target={'_blank'} className="flex items-center justify-center gap-2  w-full rounded-xl py-2 font-semibold text-white bg-black">
                <AiOutlineGithub/> View Github
              </a>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  , document.querySelector('#modal')) 
  : null

}

export default Modal