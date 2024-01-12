"use client"
import React, { useEffect, useState } from 'react'
import { getFooter } from '@/sanity/sanity-utils'

import Image from 'next/image'
import Link from 'next/link'
import { FooterS } from '@/types/FooterS'

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

  
  return (

    
    <div className="w-full h-auto bg-black">

{sitewizardSecction.map((seccionfooter) => (

      <div 
      key={seccionfooter._id}
      className="w-full h-auto lg:p-24 md:p-10 p-4 flex flex-col justify-center items-center space-y-4">

        <div className="w-full h-auto flex justify-center items-center">
        <Image
              className={"w-[120px] h-[85px]"}
              width={125}
              height={85}
              src={seccionfooter.logo}
              alt={seccionfooter.logo}
              >
        </Image>
        </div>

        <div className="w-full h-auto flex justify-center items-center space-x-4">

          <h1 className="cursor-pointer text-white hover:text-blue-400 transition-all duration-75">
             Texto1
          </h1>

          <h1 className="cursor-pointer text-white hover:text-blue-400 transition-all duration-75">
             Texto2          
          </h1>

          <h1 className="cursor-pointer text-white hover:text-blue-400 transition-all duration-75">
             Texto3       
          </h1>

          <h1 className="cursor-pointer text-white hover:text-blue-400 transition-all duration-75">
             Texto4
          </h1>
          
        </div>

        <div className="flex w-full h-auto justify-center items-center">

            <h1 className="text-white">

            © 2024 Equi Propiedades | Code By  
            <Link href={'https://xplendev.com/'}>
            <span className="cursor-pointer text-white hover:text-blue-400 hover:border-b-2 hover:border-b-blue-400 transition-all duration-75">
               Xplendev
            </span>
            </Link>

            </h1>

        </div>

      </div>

))} 

    </div>
  )
}

export default Contact