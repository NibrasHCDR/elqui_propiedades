"use client"
import React, { useEffect, useState } from 'react'

import styles from './button-black.module.css'
import { PortadaS } from '@/types/PortadaS';
import { getPortada } from '@/sanity/sanity-utils';
import { motion } from 'framer-motion';

type Props = {}

function Inicio({}: Props) {
    
    const [sitewizardSecction, setSitewizardSecction] = useState<PortadaS[]>([]); // Especifica el tipo de estado inicial aquí

    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getPortada();
          setSitewizardSecction(data);
        } catch (error) {
          console.error('Error al encontrar la sección --Portada--:', error);
        }
      }
  
      fetchData();
    }, []);

  return (

    <motion.div 
    className="w-full h-screen"
    >

    {sitewizardSecction.map((seccion) => (
    
    <div 
    key={seccion._id}
    className="w-full h-screen bg-bottom bg-cover " style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
      url('${seccion.fondo}')`
    }}>

        <div className="w-full h-full lg:p-24 md:p-10 p-4 no-select">

            <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1.2 }}
             transition={{ duration: 0.7, ease: [0.6, 0.05, 0.5, 0.95] }}
             className="w-full h-full flex flex-col space-y-4 justify-center items-center">

              <div className="flex flex-col space-y-4">
              <h1 className="text-center text-white font-anton xl:text-4xl lg:text-3xl md:text-2xl text-xl">
                    {seccion.titulo1} 
                </h1>
                <h1 className="text-center text-white font-anton xl:text-6xl lg:text-3xl md:text-2xl text-xl">
                    {seccion.titulo2} 
                </h1>
              </div>

              <div className="w-auto h-auto flex">

                <div className="w-full h-full pt-4">
                <h1 className={`w-auto h-auto ${styles.button88}`}>
                   {seccion.boton}
                </h1>

                </div>

              </div>

            </motion.div>
        </div>

  

    </div>

))} 

    </motion.div>
  )
}

export default Inicio