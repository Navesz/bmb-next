import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="relative flex min-h-screen w-full justify-center items-center lg:justify-start">
        <Image className="z-0" src="/banner.jpg" fill objectFit="cover" alt='Banner BMB'/>
        <div className='flex flex-col z-20 gap-4 lg:m-36'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-zinc-50 font-bold text-6xl lg:text-7xl'>SOLUÇÕES</h1>
            <h1 className='text-zinc-50 font-light text-5xl lg:text-7xl'>SOB MEDIDA</h1>
          </div>
          <button type='button' className=' bg-orange-500/60 rounded hover:bg-orange-500 backdrop-blur p-3 text-xl transition'>Monte Agora</button>
        </div>
      </main>
      <div className='h-48'>
        f
      </div>
    </div>

  )
}
