"use client"
import React, { useEffect, useState } from 'react'
import Styles from './seccion1.module.css'
import Swuip from '../Swuip'
import { Seccion1S } from '@/types/Seccion1S'
import { getSeccion1 } from '@/sanity/sanity-utils'

type Props = {}

function Seccion1({}: Props) {

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

    
    <div className="w-full h-screen bg-white">

      {sitewizardSecction.map((seccionterrenos) => (

        <div 
        key={seccionterrenos._id}
        className={`w-full h-full lg:p-24 md:p-10 p-4 lg:space-y-8 ${Styles['contenedor-seccion1']}` }>

              <div className={` ${Styles['seccion1-1']}` }>
                    
                    <div className="w-full h-full md:flex grid items-center justify-center md:items-start md:justify-start">

                        <div className="flex items-center w-full h-full">

                        <h1 className="font-oswald xl:text-4xl lg:text-3xl md:text-2xl text-xl">
                            {seccionterrenos.titulo1}
                        </h1>

                        </div>


                        <div className="w-full h-full flex justify-end items-center">
                            <h1 className="flex font-oswald xl:text-4xl lg:text-3xl md:text-2xl text-xl cursor-pointer hover:text-blue-400">
                            {seccionterrenos.titulo2}
                            </h1>
                        </div>

                    </div>

                    
              </div>

              <div className={` ${Styles['seccion1-2']}` }>

                <div className="w-[275px] md:w-[680px] lg:w-[890px] xl:w-[1150px] mx-auto">

                 <Swuip />

                </div>

              </div>

        </div>

))} 
       
    </div>
  )
}

export default Seccion1