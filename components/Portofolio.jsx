import Line from "../styles/line";
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Portofolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
  
  <div id='portofolio' className='text-left bg-yellow-100 w-full px-5 md:px-14 xl:px-36 py-14 grid xl:grid-cols-2 gap-14'>
    <div className='flex flex-col gap-10'>
      <h1 className='relative text-5xl leading-tight font-bold'>
        Some of My Portofolio
        <div className='absolute -left-0 -right-2 -bottom-8 w-56'>
          <Line/>
        </div>
      </h1>
      <p className='leading-relaxed tracking-wider'>
        These are my past projects, 
        some of my work has been live but can only be accessed by an authenticated user.
        For all these projects, i do the backend and the frontend (with responsive design)
        with a little bit UI designing here and there.
        The most complex i ever wrote is the Diktus App, in which user can learn UTBK test-taking skill and analyze their knowledge
         with some gamification. I also wrote the text-writer for 
         the teachers to upload their tests into the Diktus
      </p>
      <div className='text-center lg:hidden xl:block bg-blue-200 rounded-3xl p-5 w-full h-max'>
        <Image className='rounded-3xl' src='/writer.png' alt='rich text editor web app' width='1000' height='550'/>
      </div>
    </div>
    
    <div className='flex flex-col gap-10 lg:grid lg:grid-cols-2 '>
      <div className='hidden lg:block xl:hidden text-center bg-blue-200 rounded-3xl p-5 w-full h-max'>
        <Image className='rounded-3xl' src='/writer.png' alt='rich text editor web app' width='1000' height='550'/>
      </div>
      <div className='text-center xl:col-span-2 bg-blue-200 rounded-3xl p-5 w-full h-full'>
        <Image className='rounded-3xl' src='/latihan.png' alt='rich text editor web app' width='1000' height='550'/>
      </div>
      <div className='bg-blue-200 place-self-center lg:col-span-2 rounded-3xl p-5 w-full lg:w-max h-full text-center'>
        <div className='flex justify-center'>
          <Image className='-rotate-12 rounded-3xl mt-36' src='/mobile2.png' alt='rich text editor web app' width='180' height='300'/>
          <Image className='rounded-2xl' src='/mobile3.png' alt='rich text editor web app' width='180' height='300'/>
          <Image className='rotate-12 rounded-3xl' src='/mobile1.png' alt='rich text editor web app' width='180' height='300'/>
        </div>

      </div>
      </div>

  </div>
  )

}