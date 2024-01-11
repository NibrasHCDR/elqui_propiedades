"use client"
import React, { useEffect, useState } from 'react'
import Styles from './contact.module.css'
import Swuip from '../Swuip'
import { Seccion1S } from '@/types/Seccion1S'
import { getSeccion1 } from '@/sanity/sanity-utils'

import { IoIosMailUnread } from "react-icons/io";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

type Props = {}

function Contact({}: Props) {

  const [sitewizardSecction, setSitewizardSecction] = useState<Seccion1S[]>([]); // Especifica el tipo de estado inicial aquí

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSeccion1();
        setSitewizardSecction(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  
  return (

    
    <div className="w-full h-full bg-white">

      <div className={`w-full h-full lg:p-24 md:p-10 p-4 ${Styles['contenedor-contact']}` }>

         <div className={`rounded-lg bg-gray-400 hover:scale-105 transition-all duration-300 ${Styles['contact-1']}` }>  

            <div className="flex flex-col w-full xl:h-[350px] lg:h-[250px] h-[150px] p-4 space-y-2 items-center">

              <IoIosMailUnread className="w-[50px] h-[50px] text-white">
                  
              </IoIosMailUnread>

              <div className="w-auto h-auto">

                <h1 className="text-center text-white">
                contacto@elquipropiedades.com
                </h1>
                   
              </div>

               <div className="w-auto h-autotext-center lg:pt-4">

                <h1 className="text-center text-white">
                Esté es un lore ipsum que se realiza de la <br />
                de los lore ipsum consuming ispum <br />
                ipsum ipusm lore impus
                </h1>
                   
              </div>

             <div className="w-auto h-auto lg:pt-16">

                <h1 className="text-center text-white">
                Learn More -
                </h1>
                   
              </div>


            </div>

         </div>

         <div className={`bg-blue-400 rounded-lg hover:scale-105 transition-all duration-300 ${Styles['contact-2']}` }>

          <div className="flex flex-col w-full xl:h-[350px] lg:h-[250px] h-[150px] p-4 space-y-2 items-center">

              <FaWhatsapp className="w-[50px] h-[50px] text-white">
                  
              </FaWhatsapp>

              <div className="w-auto h-auto">

                <h1 className="text-center text-white">
                contacto@elquipropiedades.com
                </h1>
                   
              </div>

               <div className="w-auto h-autotext-center lg:pt-4">

                <h1 className="text-center text-white">
                Esté es un lore ipsum que se realiza de la <br />
                de los lore ipsum consuming ispum <br />
                ipsum ipusm lore impus
                </h1>
                   
              </div>

             <div className="w-auto h-auto lg:pt-16">

                <h1 className="text-center text-white">
                Learn More -
                </h1>
                   
              </div>


            </div>

        </div>

        <div className={`bg-red-400 rounded-lg hover:scale-105 transition-all duration-300  ${Styles['contact-3']}` }>

          <div className="flex flex-col w-full xl:h-[350px] lg:h-[250px] h-[150px] p-4 space-y-2 items-center">

              <FaInstagram className="w-[50px] h-[50px] text-white">
                  
              </FaInstagram>

              <div className="w-auto h-auto">

                <h1 className="text-center text-white">
                contacto@elquipropiedades.com
                </h1>
                   
              </div>

               <div className="w-auto h-autotext-center lg:pt-4">

                <h1 className="text-center text-white">
                Esté es un lore ipsum que se realiza de la <br />
                de los lore ipsum consuming ispum <br />
                ipsum ipusm lore impus
                </h1>
                   
              </div>

             <div className="w-auto h-auto lg:pt-16">

                <h1 className="text-center text-white">
                Learn More -
                </h1>
                   
              </div>


            </div>

        </div>

        <div className={`space-y-4 ${Styles['contact-4']}` }>
         
            <div className="flex flex-col w-full h-auto">

              <div className="w-full h-auto space-y-2">

                <h1 className="text-center text-black font-oswald xl:text-6xl lg:text-3xl md:text-2xl text-xl">
                  Contáctame
                </h1>

                <h1 className="text-center">
                  Taths a lore ipsum to qe need to add a letters on the content for morte expresions
                </h1>

              </div>


            </div>

            <div className="flex flex-col w-full h-full">

              <div className="w-full h-auto space-y-2">

                <input 
                className=" text-black w-full border-2 rounded-md p-2"
                value="Nombre">
                </input>

                <input 
                className=" text-black w-full border-2 rounded-md p-2"
                value="Telefono o Correo">
                </input>

                <input 
                className=" text-black w-full border-2 rounded-md p-2"
                value="Asunto">
                </input>

                <textarea
                className="text-black w-full lg:min-h-[145px] border-2 rounded-md p-2"
                value="Mensaje">
                </textarea>

              </div>


            </div>

        </div>

       </div>

    </div>
  )
}

export default Contact