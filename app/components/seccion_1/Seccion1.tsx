import React from 'react'
import Styles from './seccion1.module.css'

type Props = {}

function Seccion1({}: Props) {
  return (
    <div className="w-full h-screen bg-white">

        <div className={`w-full h-full lg:p-24 md:p-10 p-4 ${Styles['contenedor-seccion1']}` }>

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

              <div className={`bg-red-400 ${Styles['seccion1-2']}` }>
                  compa2
              </div>

        </div>
       
    </div>
  )
}

export default Seccion1