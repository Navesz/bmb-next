'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState('bg-transparent');

  const handleScroll = () => {
    const show = window.scrollY > 1;
    if (show) {
      setNavBackground('bg-black');
    } else {
      setNavBackground('bg-transparent');
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${navBackground} z-10 h-14 w-full fixed flex text-zinc-50 items-center justify-between px-4 transition-colors duration-500`}>
      <Link href="/" passHref>
        <div className="cursor-pointer">
          <Image alt='BMB Logo' src='/bmb.svg' width={90} height={90} />
        </div>
      </Link>
      <div className='hidden gap-8 lg:flex'>
        <Link href="/sobre" passHref>
          <span className="cursor-pointer hover:text-zinc-400 transition">Nossas soluções</span>
        </Link>
        <Link href="/sobre" passHref>
          <span className="cursor-pointer hover:text-zinc-400 transition">Sobre a empresa</span>
        </Link>
        <Link href="/sobre" passHref>
          <span className="cursor-pointer hover:text-zinc-400 transition">Encontre seu veículo</span>
        </Link>
        <Link href="/sobre" passHref>
          <span className="cursor-pointer hover:text-zinc-400 transition">Contato</span>
        </Link>
        {/* Restante das suas rotas */}
      </div>
      <Link href="/menu" passHref>
        <div className="cursor-pointer filter hover:brightness-50 transition">
          <Image alt='BMB Logo' src='/menu.svg' width={40} height={40} />
        </div>
      </Link>
    </nav>
  )
}

export default Navbar;
