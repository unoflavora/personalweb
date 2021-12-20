import {MdTagFaces} from 'react-icons/md'
import {FaRegHandRock} from 'react-icons/fa'
import {AiOutlineBook} from 'react-icons/ai'
import Line from '../styles/line.svg'

export default function About() {
  return (
    <div className='py-10 flex flex-col gap-10 justify-center xl:px-36 bg-yellow-100 '>
      <h1 className='text-5xl font-bold text-wider leading-tight'>
        <span className='relative w-max'>
          Four
          <div className='absolute w-full right-0'>
          <Line/>
          </div>
        </span> Things About <span className='relative w-max'>
          Me
          <div className='absolute w-full right-0'>
          <Line/>
          </div>
        </span>
      </h1>
      <div className='grid md:grid-cols-2 xl:grid-rows-2 gap-y-16'>
        {about.map((item, index) => (
          <div key={index} className='px-10 flex flex-col gap-5'>
            <h1 className='font-semibold text-xl flex items-center justify-center gap-2'>
              {item.icon}{item.title}
            </h1>
            <p className='leading-relaxed tracking-wider'>
              {item.text}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

const about = [
  {
    icon: <MdTagFaces size={30}/>,
    title: 'Passionate about Programming',
    text: `I do have a lot of passion about programming. I started learning javascript 
          back when i was at 8th grade. But life got me carried away 
          and it was my 3rd year at campus when I reinstated my love of programming. Since then, i never looked back.
          `
  },
  {
    icon: <FaRegHandRock size={30}/>,      
    title: 'Believe in Coding for a Better World',
    text: `World Economic Forum stated that the technology
    could have a “major impact” on ten of the 17 sustainability goals. This means that a better
    future will have technology at it's foundation.
    I consider it part of my mission to bring the tech closer to the issues that really matter
    for a better world`
  },
  {
    icon: <AiOutlineBook size={30}/>,      
    title: 'Love to Learn New Things',
    text: `I love learning new skills, random facts, and furthering my own knowledge. It's fun.
    I like astrophysics, literature, biology, math, economics, and above all, programming, which can be applied in anything :)
    `
  },
  {
    icon: <AiOutlineBook size={30}/>,      
    title: 'Able to Solve Problem Independently/Groups',
    text: `Since i am self-taught in basically all of my skills outside my formal education major, i am used to overcome issues 
    both independently or within groups. I always strive to solve problem.
    `
  }
]