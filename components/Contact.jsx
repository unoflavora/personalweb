import Link from "next/link";

export default function Contact() {
  return(
    <div className='px-5 xl:px-36 pt-10 bg-gradient-to-r from-yellow-50 to-yellow-100 flex flex-col py-10 items-center gap-5'>
      <h1 className='text-4xl xl:text-5xl w-3/4 font-bold tracking-wider leading-tight'>
        That's All About Me, Feel Free to Say Hi!
      </h1>
      <div className='text-lg xl:text-xl flex gap-20 justify-center'>
        <p>Just shot your ideas or just catching up with me. I'm very welcome to everyone.</p>
      </div>
      
    <ButtonMailto label="imamsyahid@diktus.id" mailto="imamsyahid@diktus.id" />

    </div>
  )
}

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          href='#'
          onClick={(e) => {
              window.location = mailto;
              
              e.preventDefault();
          }}
      >
        <a className='xl:text-xl px-5 py-2 bg-blue-500 font-semibold text-white rounded-2xl'>
          {label}
        </a>
      </Link>
  );
};