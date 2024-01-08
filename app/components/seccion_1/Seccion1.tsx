"use client"
import React from 'react'
import Styles from './seccion1.module.css'
import Swuip from '../Swuip'

type Props = {}

function Seccion1({}: Props) {
  return (
    <div className="w-full h-screen bg-white">

        <div className={`w-full h-full lg:p-24 md:p-10 p-4 lg:space-y-8 space-y-4 ${Styles['contenedor-seccion1']}` }>

              <div className={` ${Styles['seccion1-1']}` }>
                    
                    <div className="w-full h-full flex">

                        <div className="flex items-center w-full h-full">

                        <h1 className="font-kanit xl:text-4xl lg:text-3xl md:text-2xl text-xl">
                            Porpiedades Populares
                        </h1>

                        </div>


                        <div className="w-full h-full flex justify-end items-center">
                            <h1 className="flex font-kanit xl:text-4xl lg:text-3xl md:text-2xl text-xl cursor-pointer hover:text-blue-400">
                                Ver Todas las Propiedades ⟶
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
       
    </div>
  )
}

export default Seccion1