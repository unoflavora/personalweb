import Line from '../styles/line'
import Image from 'next/image'
import AnimatedLine from '../public/line.svg'
export default function Header(props) {
  const stats = [
    { num: 1, desc:'Years Experience' },
    { num: 5, desc: 'Completed Projects' },
    { num: 1, desc: 'Live Projects' },
    { num: 3, desc: 'Programming Language' }
  ]

  const nav = ['Home', 'Works', 'About', 'Contact']
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
              <button onClick={() => executeScroll(props[item])} className='font-semibold  md:text-lg' key={index}>
                  {item}
              </button>
            )}
          </nav>
          <div className='md:hidden bg-yellow-200 rounded-b-full lg:py-64'>  
          <Image className='rounded-full' src='/foto.png' alt='foto imam' width={300} height={500}/>

           </div>
          <div className='flex flex-col gap-2 md:gap-14 text-left px-0'>
            <div className='md:gap-5'>
            <h1 className='text-blue-400 text-xl mt-10 md:mt-0 font-semibold'>Imam Syahid Hudzaifah</h1>
            <h1 className='relative text-5xl break-all md:break-normal xl:text-6xl tracking-wide leading-tight font-bold'>
              <span className='hidden md:inline'>Self-Taught </span> Web <span className='inline-block md:hidden'> Dev</span>
              <span className='hidden md:inline'> Developer</span>
              <div className='absolute left-0 -bottom-5 w-1/2 md:-bottom-8 md:left-0 md:w-4/5  xl:-bottom-14 lg:w-1/2 xl:w-80'>
                <object type="image/svg+xml" data='/line.svg'/>
              </div>              
            </h1>
            </div>

            <p className='leading-loose text-lg font-semibold'>
              <span className='hidden md:inline'>
              To be a Professional Web Developer is my dream. 
              </span> I hope to make an impact in an important future of digital world. 
              I have learned a lot, and love to learn a lot more
              <button onClick={() => executeScroll(props.Works)} className='block bg-blue-400 text-white  mt-5 px-5 py-2 text-lg font-semibold rounded-xl '>My Story</button></p>
            
          </div>
        </div>
      </div>
      <ul className='grid grid-cols-2 md:grid-cols-4 xl:px-24 gap-1 py-10 xl:pb-24'>
        {stats.map((item, index) => {
          return(
            <li key={index} className='flex items-center justify-start text-left gap-4'>
              <h1 className='font-bold text-6xl text-yellow-300'>{item.num}</h1>
              <p className='w-1/5'>{item.desc}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}