'use client';
import  { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion'
import { getHeader } from '@/sanity/sanity-utils'
import { HeaderS } from '@/types/HeaderS';

type Props = {}

function Header({}: Props) {

  const [sitewizardSecction, setSitewizardSecction] = useState<HeaderS[]>([]); // Especifica el tipo de estado inicial aquí

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHeader();
        setSitewizardSecction(data);
      } catch (error) {
        console.error('Error al encontrar la sección --Header--:', error);
      }
    }

    fetchData();
  }, []);


  const handleButtonClick0 = () => {
    const membershipsSection = document.getElementById('contacto');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [tamañoNav, setTamañoNav] = useState("w-full h-[115px] max-w- fixed left-0 top-0 z-10 ease-in duration-300")
    const [tamañoLogo, setTamañoLogo] = useState("w-[130px] h-[90px] no-select hover:scale-105 transition-all duration-500 cursor-default")
    const [tamañoTexto, setTamañoTexto] = useState("inline-block hover:scale-105 border-[#29F2CD] hover:text-[#49DB5F] lg:text-lg xl:text-xl text-xs pt-4 font-medium uppercase leading-normal text-primary transition-all duration-300 hover:bg-opacity-[2%]  hover:border-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 font-unicaone")


    const handleNav = () => {
      setNav(!nav);
};

useEffect(() => {
     const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor('#010101')
            setTextColor('#F7F7F7')
            setTamañoNav("w-full h-[90px] max-w-auto fixed left-0 top-0 z-10 shadow-xl ease-in duration-300")
            setTamañoLogo("w-[90px] h-[70px] no-select hover:scale-105 transition-all duration-500 cursor-default")
            setTamañoTexto("inline-block hover:scale-105 border-[#29F2CD] hover:text-[#49DB5F] lg:text-lg xl:text-xl text-xs pt-2 font-medium uppercase leading-normal text-primary transition-all duration-300 hover:bg-opacity-[2%] hover:border-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 font-unicaone")
        } else {
            setColor('transparent')
            setTextColor('#ffffff')
            setTamañoNav("w-full h-[115px] fixed left-0 top-0 z-10 ease-in duration-300")
            setTamañoLogo("w-[130px] h-[90px] no-select hover:scale-105 transition-all duration-500 cursor-default")
            setTamañoTexto("inline-block hover:scale-105 border-[#29F2CD] hover:text-[#49DB5F] lg:text-lg xl:text-xl text-xs pt-4 font-medium uppercase leading-normal text-primary transition-all duration-300 hover:bg-opacity-[2%]  hover:border-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 font-unicaone")
        }
     };
     window.addEventListener('scroll', changeColor);
}, []);


  return (
    <motion.div 
    initial={{ opacity: 0, x: -350 }}
    animate={{ opacity: 1.2, x: 0 }}
    transition={{ duration: 0.5, ease: [0.6, 0.05, 0.5, 0.95] }} // Duración de la animación
    style={{backgroundColor: `${color}` }}
     className={tamañoNav}
     >

{sitewizardSecction.map((seccion) => (

        <div 
        key={seccion._id}
        className="max-w-[1240px] no-select mx-auto h-auto w-auto flex justify-between items-center p-4 text-white">
            <Link href="https://xplendev.com/" className="no-select cursor-pointer">
            <motion.img 
              className={tamañoLogo + "cursor-pointer"}
              src={seccion.logo} alt={seccion.logo} 
              >
              </motion.img>
            </Link>
            <ul style={{color: `${textColor}`}} className="hidden sm:flex">
                <li className="p-4">
                <Link href="/obras">
                <button type="button"
                        className={tamañoTexto}
                        data-te-ripple-init>
                          {seccion.menu1}
                        </button>
                </Link>
                </li>
                <li className="p-4">
                <Link href={"/mundodigital"}>
                <button type="button"
                        className={tamañoTexto}
                        data-te-ripple-init>
                          {seccion.menu2}
                        </button>
                </Link>
                </li>

                <li className="p-4">
                <button type="button"
                        className={tamañoTexto}
                        onClick={handleButtonClick0}
                        data-te-ripple-init>
                          {seccion.menu3}
                        </button>
                </li>

            </ul>

            {/* Botones Móviles */}
            <button onClick={handleNav} className="block sm:hidden z-10 hover:scale-150 hover:text-[#29F2CD] transition duration-150 ease-in-out">
                {nav
                 ? <AiOutlineClose size={25} /> 
                 : <AiOutlineMenu  size={25} style={{color: `${textColor}`}}
                 />
                 }
                
            </button>
            {/* Movile Menu */}
            <div className={
                nav
                 ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                 : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                   
                }
                 >
            <ul>
            <Link href={"/obras"}>
            <li>
              <button onClick={handleNav} className="p-4 text-4xl font-kanit hover:text-[#29F2CD] transition duration-150 ease-in-out hover:scale-125">
              {seccion.menu1}
              </button>
              </li>
              </Link>

              <Link href={"/mundodigital"}>
              <li>
              <button onClick={handleNav} className="p-4 text-4xl font-kanit hover:text-[#29F2CD] transition duration-150 ease-in-out hover:scale-125">
              {seccion.menu2}
              </button>
              </li>
                </Link>

                <li onClick={handleNav} className="p-4 text-4xl font-kanit hover:text-[#29F2CD] transition duration-150 ease-in-out hover:scale-125">
                <button onClick={handleButtonClick0}>
                {seccion.menu3}
                </button>
                </li>
            </ul>
            </div>
        </div>

                 ))}    

    </motion.div>
  )
}

export default Header