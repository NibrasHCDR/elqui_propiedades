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

  const handleButtonClick1 = () => {
    const contactSecction = document.getElementById('seccion1');
    if (contactSecction) {
      contactSecction.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick2 = () => {
    const contactSecction = document.getElementById('seccion2');
    if (contactSecction) {
      contactSecction.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleButtonClick3 = () => {
    const contactSecction = document.getElementById('contact');
    if (contactSecction) {
      contactSecction.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClickInicio = () => {
    const contactSecction = document.getElementById('header');
    if (contactSecction) {
      contactSecction.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [tamañoNav, setTamañoNav] = useState("w-full h-[115px] max-w- fixed left-0 top-0 z-10 transition-all duration-300")
    const [tamañoLogo, setTamañoLogo] = useState("w-[130px] h-[90px] no-select hover:scale-105 transition-all duration-300 cursor-default cursor-pointer")


    const handleNav = () => {
      setNav(!nav);
};

useEffect(() => {
     const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor('#010101')
            setTextColor('#F7F7F7')
            setTamañoNav("w-full h-[90px] max-w-auto fixed left-0 top-0 z-10 shadow-xl transition-all duration-300")
            setTamañoLogo("w-[90px] h-[70px] no-select hover:scale-105 transition-all duration-300 cursor-default cursor-pointer")
        } else {
            setColor('transparent')
            setTextColor('#ffffff')
            setTamañoNav("w-full h-[115px] fixed left-0 top-0 z-10 transition-all duration-300")
            setTamañoLogo("w-[130px] h-[90px] no-select hover:scale-105 transition-all duration-300 cursor-default cursor-pointer")
        }
     };
     window.addEventListener('scroll', changeColor);
}, []);


  return (
    <motion.div 
    initial={{ opacity: 0, y: -250 }}
    animate={{ opacity: 1.2, y: 0 }}
    transition={{ duration: 1, ease: [0.6, 0.05, 0.5, 0.95] }} // Duración de la animación
    style={{backgroundColor: `${color}` }}
     className={tamañoNav}
     >

{sitewizardSecction.map((seccion) => (

        <div 
        key={seccion._id}
        className="max-w-[1240px] no-select mx-auto h-auto w-auto flex justify-between items-center p-4 text-white">
          <div className="cursor-pointer w-auto h-full">
          <motion.img 
            onClick={handleButtonClickInicio}
              className={tamañoLogo}
              src={seccion.logo} alt={seccion.logo} 
              >
              </motion.img>
          </div>


            <ul style={{color: `${textColor}`}} className="hidden sm:flex h-full">
                <li className="p-4 h-[50px]">
                <h1
                        className="inline-block cursor-pointer text-white hover:border-b-2 font-oswald xl:text-3xl lg:text-2xl md:text-2xl text-xl"
                        onClick={handleButtonClick1}
                        >
                          {seccion.menu1}
                        </h1>

                </li>
                <li className="p-4 h-[50px]">

                <h1
                        className="inline-block cursor-pointer text-white hover:border-b-2 font-oswald xl:text-3xl lg:text-2xl md:text-2xl text-xl"
                        onClick={handleButtonClick2}
                        >
                          {seccion.menu2}
                        </h1>
                </li>

                <li className="p-4 h-[50px]">
                <h1
                        className="inline-block cursor-pointer text-white hover:border-b-2 font-oswald xl:text-3xl lg:text-2xl md:text-2xl text-xl"
                        onClick={handleButtonClick3}
                        >
                          {seccion.menu3}
                        </h1>
                </li>

            </ul>

            {/* Botones Móviles */}
            <button onClick={handleNav} className="block sm:hidden z-10 hover:scale-150 hover:text-[#29F2CD] transition-all duration-75 ">
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

            <li onClick={handleNav} className="p-4 text-4xl font-kanit hover:text-[#29F2CD] transition duration-150 ease-in-out hover:scale-125">
              <button onClick={handleButtonClick1}>
              {seccion.menu1}
              </button>
              </li>


              <li onClick={handleNav} className="p-4 text-4xl font-kanit hover:text-[#29F2CD] transition duration-150 ease-in-out hover:scale-125">
              <button onClick={handleButtonClick2}>
              {seccion.menu2}
              </button>
              </li>

                <li onClick={handleNav} className="p-4 text-4xl font-kanit hover:text-[#29F2CD] transition duration-150 ease-in-out hover:scale-125">
                <button onClick={handleButtonClick3}>
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