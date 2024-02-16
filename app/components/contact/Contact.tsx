"use client"
import React, { useEffect, useState } from 'react'
import Styles from './contact.module.css'
import { getContacto} from '@/sanity/sanity-utils'

import { IoIosMailUnread } from "react-icons/io";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { ContactoS } from '@/types/ContactoS'
import Link from 'next/link';

import styles from '../button-black.module.css'

type Props = {}

function Contact({}: Props) {

  const [message, setMessage] = useState(false);

  const messageClick = () => {
    setMessage(true);
    alert("Gracias por tu mensaje! Te responderemos lo antes posible");
  };

  const [sitewizardSecction, setSitewizardSecction] = useState<ContactoS[]>([]); // Especifica el tipo de estado inicial aquí

  useEffect(() => {
    async function fetchData() {
      try {
        const seccionContacto = await getContacto();
        setSitewizardSecction(seccionContacto);
      } catch (error) {
        console.error('Error al encontrar la sección --Contacto--:', error);
      }
    }

    fetchData();
  }, []);

  
  return (

    
    <div className="w-full h-full bg-white">

   {sitewizardSecction.map((seccioncontacto) => (

      <div 
      key={seccioncontacto._id}
      className={`w-full h-full lg:p-24 md:p-10 p-4 ${Styles['contenedor-contact']}` }>

         <div className={`rounded-lg bg-[#116FA0] hover:scale-105 transition-all duration-300 ${Styles['contact-1']}` }>  

            <div className="flex flex-col w-full xl:h-[350px] lg:h-[200px] h-[150px] p-4 space-y-2 items-center">

            <div className="w-full h-auto items-center flex justify-center">
               <IoIosMailUnread className="w-[50px] h-[50px] text-white">
                  
               </IoIosMailUnread>

            </div>


              <div className="w-auto h-auto">

                <h1 className="text-center text-white font-kanit">
                {seccioncontacto.titulo1}
                </h1>
                   
              </div>

               <div className="w-auto h-autotext-center lg:pt-4">

                <h1 className="text-center text-white font-kanit">
                {seccioncontacto.descripcion1}
                </h1>
                   
              </div>

             <div className="w-auto h-auto lg:pt-16">

                <h1 className="text-center text-white font-kanit hover:text-black cursor-pointer hover:border-b-2 hover:border-black">
                {seccioncontacto.titulo1}
                </h1>
                   
              </div>


            </div>

         </div>

         <div className={`bg-[#26D367] rounded-lg hover:scale-105 transition-all duration-300 ${Styles['contact-2']}` }>

          <div className="flex flex-col w-full xl:h-[350px] lg:h-[200px] h-[150px] p-4 space-y-2 items-center">

          <div className="w-full h-auto items-center flex justify-center">
          <FaWhatsapp className="w-[50px] h-[50px] text-white">
                  
          </FaWhatsapp>

            </div>



              <div className="w-auto h-auto">

                <h1 className="text-center text-white font-kanit">
                {seccioncontacto.titulo2}
                </h1>
                   
              </div>

               <div className="w-auto h-autotext-center lg:pt-4">

                <h1 className="text-center text-white font-kanit">
                {seccioncontacto.descripcion2}
                </h1>
                   
              </div>

             <div className="w-auto h-auto lg:pt-16">
                <Link href={'https://api.whatsapp.com/send?phone=56994661560&text=Hola!%20me%20gustaría%20agendar%20una%20visita%20...'}>
                <h1 className="text-center text-white font-kanit hover:text-blue-800 cursor-pointer hover:border-b-2 hover:border-blue-800">
                Enviár Mensaje de Whatsapp ⟶
                </h1>
                </Link>
                   
              </div>


            </div>

        </div>

        <div className={`bg-gradient-to-br from-[#833ab4] to-[#fd1d1d] rounded-lg hover:scale-105 transition-all duration-300  ${Styles['contact-3']}` }>

          <div className="flex flex-col w-full xl:h-[350px] lg:h-[200px] h-[150px] p-4 space-y-2 items-center">

            <div className="w-full h-auto items-center flex justify-center">
            <FaInstagram className="w-[50px] h-[50px] text-white">
                  
           </FaInstagram>

            </div>

              <div className="w-auto h-auto">

                <h1 className="text-center text-white font-kanit">
                {seccioncontacto.titulo3}
                </h1>
                   
              </div>

               <div className="w-auto h-autotext-center lg:pt-4">

                <h1 className="text-center text-white font-kanit">
                {seccioncontacto.descripcion3}
                </h1>
                   
              </div>

             <div className="w-auto h-auto lg:pt-16">

                <Link href={''}>
                <h1 className="text-center text-white font-kanit hover:text-black cursor-pointer hover:border-b-2 hover:border-black">
                Ver en Instagram.com ⟶
                </h1>
                </Link>
                   
              </div>


            </div>

        </div>

        <div className={`space-y-12 ${Styles['contact-4']}` }>
         
            <div className="flex flex-col w-full h-auto">

              <div className="w-full h-auto space-y-4">

                <h1 className="text-center text-black font-oswald xl:text-7xl lg:text-5xl md:text-4xl text-3xl">
                  {seccioncontacto.titulo4}
                </h1>

                <h1 className="text-center font-oswald xl:text-3xl lg:text-2xl md:text-2xl text-xl">
                  {seccioncontacto.descripcion4}
                </h1>

              </div>


            </div>

            <div className="flex flex-col w-full h-full">

              <form action="https://formsubmit.co/valeperaltatorres@gmail.com" method='POST'>

              <div className="w-full h-auto space-y-4">

                <input 
                placeholder={seccioncontacto.nombre} 
                type='text' 
                name="nombre"
                className=" text-black w-full border-2 rounded-md p-2"
                required>
                </input>

                <input 
                className=" text-black w-full border-2 rounded-md p-2"
                placeholder={seccioncontacto.telefonoCorreo} 
                type='text' 
                name="Email"
                required>
                </input>

                <input 
                className=" text-black w-full border-2 rounded-md p-2"
                placeholder={seccioncontacto.asunto} 
                type='text' 
                name="asunto"
                required>
                </input>

                <textarea
                className="text-black w-full lg:min-h[240px] lg:max-h-[240px] md:min-h-[240px] md:max-h-[240px] min-h-[200px] max-h-[200px] border-2 rounded-md p-2"
                placeholder={seccioncontacto.mensaje}
                name="mensaje"
                required>
                </textarea>

             <div className="w-auto h-auto flex space-x-3 justify-center items-center">

              <div className="w-auto h-full">

              <button onClick={messageClick} type='submit' className={` ${styles.button88}`}>
                   Enviar Mensaje
              </button>



              </div>

            </div>

              </div>

              </form>


            </div>


        </div>

       </div>

))} 

    </div>
  )
}

export default Contact