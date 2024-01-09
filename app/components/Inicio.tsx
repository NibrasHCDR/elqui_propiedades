"use client"
import React, { useEffect, useState } from 'react'

import styles from './button-white.module.css'
import { PortadaS } from '@/types/PortadaS';
import { getPortada } from '@/sanity/sanity-utils';

type Props = {}

function Inicio({}: Props) {
    
    const [sitewizardSecction, setSitewizardSecction] = useState<PortadaS[]>([]); // Especifica el tipo de estado inicial aquí

    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getPortada();
          setSitewizardSecction(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);

  return (

    <div className="w-full h-screen">

    {sitewizardSecction.map((seccion) => (
    
    <div 
    key={seccion._id}
    className="w-full h-screen bg-img bg-bottom bg-cover">

        <div className="w-full h-full p-24">

            <div className="w-full h-full flex flex-col space-y-4 justify-center items-center">

              <div className="">
              <h1 className="text-center text-white font-kanit xl:text-4xl lg:text-3xl md:text-2xl text-xl">
                    {seccion.titulo1}
                    <br></br> 
                    <span className="">
                      {seccion.titulo2}
                    </span> 
                </h1>
              </div>

              <div className="w-auto h-auto">
              <h1 className={`w-auto ${styles.button88}`}>
                   {seccion.boton}
                </h1>
              </div>

            </div>
        </div>

  

    </div>

))} 

    </div>
  )
}

export default Inicio