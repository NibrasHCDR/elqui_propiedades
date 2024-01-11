"use client"
import React, { useEffect, useState } from 'react'
import Styles from './contact.module.css'
import Swuip from '../Swuip'
import { Seccion1S } from '@/types/Seccion1S'
import { getSeccion1 } from '@/sanity/sanity-utils'

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

      <div className={`w-full h-full lg:p-24 md:p-10 p-4 ${Styles['contenedor-footer']}` }>

         <div className={`bg-gray-400 ${Styles['footer-1']}` }>  

              compa


         </div>

         <div className={`bg-blue-400 ${Styles['footer-2']}` }>
             compa2
        </div>

      
        </div>

       </div>
  )
}

export default Contact