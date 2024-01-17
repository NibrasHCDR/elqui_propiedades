"use client"
import React, { useEffect, useState } from 'react'
import { getFooter } from '@/sanity/sanity-utils'

import Image from 'next/image'
import Link from 'next/link'
import { FooterS } from '@/types/FooterS'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

type Props = {}

function Contact({}: Props) {

  const [sitewizardSecction, setSitewizardSecction] = useState<FooterS[]>([]); // Especifica el tipo de estado inicial aquí

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFooter();
        setSitewizardSecction(data);
      } catch (error) {
        console.error('Error al encontrar la sección --Footer--:', error);
      }
    }

    fetchData();
  }, []);

  const handleButtonClick1 = () => {
    const contactSecction = document.getElementById('header');
    if (contactSecction) {
      contactSecction.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (

    
    <div className="w-full h-auto bg-black">

{sitewizardSecction.map((seccionfooter) => (

      <div 
      key={seccionfooter._id}
      className="w-full h-auto lg:p-24 md:p-10 p-4 flex flex-col justify-center items-center space-y-4">

        <div className="w-full h-auto flex justify-center items-center">
        <Image
              className={"w-[125px] h-[85px]"}
              width={125}
              height={85}
              src={seccionfooter.logo}
              alt={seccionfooter.logo}
              >
        </Image>
        </div>
        
            <div className="w-full h-auto flex space-x-3 justify-center items-center">

              <FaWhatsapp className="w-[30px] h-[30px] cursor-pointer text-[#26D367]">
                  
              </FaWhatsapp>

              <FaInstagram className="w-[30px] h-[30px] cursor-pointer text-[#E11436]">
                  
              </FaInstagram>

              <FaFacebook className="w-[30px] h-[30px] cursor-pointer text-[#3B5999]">
                  
              </FaFacebook>
               
            </div>

        <div className="w-full h-[25px] flex justify-center items-center space-x-4">

          <h1 
          onClick={handleButtonClick1}
          className="cursor-pointer text-white hover:text-blue-400 hover:border-b-2 hover:border-b-blue-400 transition-all duration-75">
              {seccionfooter.texto1}
          </h1>

          <h1 className="cursor-pointer text-white hover:text-blue-400 hover:border-b-2 hover:border-b-blue-400 transition-all duration-75">
              {seccionfooter.texto2}         
          </h1>

          <h1 className="cursor-pointer text-white hover:text-blue-400 hover:border-b-2 hover:border-b-blue-400 transition-all duration-75">
              {seccionfooter.texto3}   
          </h1>

          <h1 className="cursor-pointer text-white hover:text-blue-400 hover:border-b-2 hover:border-b-blue-400 transition-all duration-75">
              {seccionfooter.texto4}
          </h1>
          
        </div>

        <div className="flex w-full h-[10px] justify-center items-center space-x-1">

            <h1 className="text-white">

            © 2024 Equi Propiedades | Code By  

            </h1>

            <Link href={'https://xplendev.com/'}>

            <h1 className="cursor-pointer text-white hover:text-blue-400 hover:border-b-2 hover:border-b-blue-400 transition-all duration-75">
            
               Xplendev
            
            </h1>
            </Link>

        </div>

      </div>

))} 

    </div>
  )
}

export default Contact