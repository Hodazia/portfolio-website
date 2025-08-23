
import { Twitter, BookOpen,Github } from 'lucide-react'


import Profle from '../assets/profilepic.jpg'

export const Home = () => {
  return (
    <>
    <div className="relative w-full flex-grow">
    <div className="max-w-3xl sm:w-3/4 mx-auto px-6">
    <section className='py-5'>
      <div className='flex justify-between items-start mb-10 pt-24'>
        <div className='relative w-[128px] h-[128px] rounded-2xl 
        overflow-hidden'> 
        <img 
        src={Profle}
        alt='ALternate profile picture'/>
        </div>
        <div className='flex items-center gap-6 
        '>
          <a target='_blank' className='w-10 h-10 flex items-center
          justify-center
           rounded-lg transition-colors
          hover:bg-gradient-to-r from-blue-800 to-indigo-900
          cursor-pointer hover:scale-110 duration-600
          ' href='https://x.com/zia2402'>
          <Twitter className='text-white' />
          </a>
          <a target='_blank' className='w-10 h-10 flex items-center
          justify-center rounded-lg transition-colors cursor-pointer
          hover:bg-gradient-to-r from-blue-800 to-indigo-900
          hover:scale-110 duration-600' href='https://medium.com/@zia23hoda'>
          <BookOpen className='text-white' />
          </a>
          <a target='_blank' className='w-10 h-10 flex items-center
          justify-center rounded-lg transition-colors cursor-pointer
          hover:bg-gradient-to-r from-blue-800 to-indigo-900
          hover:scale-110 duration-600' href='https://github.com/Hodazia'>
          <Github className='text-white' />
          </a>
        </div>
      </div>
      <h1 className='text-[32px] leading-none font-medium text-white mb-2'>
        Hey there, Ziaul this side
      </h1>
      <p className='text-[#8b8b8b] text-base mb-4'>
        Front End | Full Stack Engineer
      </p>
      <p className='max-w-2xl text-[#8b8b8b]'>
      I'm a Full-stack dev that loves building products 
      and web apps, My journey spans 
      Design, Wireframing, Coding, Development and Writing. I weave words to inform, entertain, and inspire, unraveling complex concepts and igniting
       imagination through creative design and coding!
      </p>
    </section>
    </div>
    </div>
    </>

  )
}

