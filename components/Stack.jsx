import Line from "../styles/line";
import {FaReact} from 'react-icons/fa'
import {SiNextdotjs, SiTailwindcss, SiMongodb} from 'react-icons/si'

export default function Stack() {



  return(
    <div className='px-2 xl:px-36 py-10 bg-yellow-50 flex flex-col gap-14'>
      <h1 className='text-3xl font-bold text-wider leading-normal xl:leading-tight'>
        These are the <span className='relative w-max'>
          Frameworks
          <div className='absolute w-full -bottom-6 -right-5 xl:right-0'>
            <Line/>
          </div>
        </span> that I Usually Work With
      </h1>
      <div className='flex pl-2 md:pl-0 gap-5 md:gap-10 lg:gap-20 w-full justify-center'>
        <FaReact size={80}/>
        <SiNextdotjs size={80}/>
        <SiTailwindcss size={80}/>
        <SiMongodb size={80}/>
      </div>

    </div>
  )
}