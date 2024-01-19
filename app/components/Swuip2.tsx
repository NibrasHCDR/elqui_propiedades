/* eslint-disable jsx-a11y/alt-text */
"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './button-black.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import style from '../styles/swiper.module.css'

// import required modules
import { Pagination } from 'swiper/modules';
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaBed, FaBath } from "react-icons/fa";

import { getCasas } from '@/sanity/sanity-utils';
import { CasasS } from '@/types/CasasS';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const revalidate = 1;

export default function App() {
  const [casas, setCasas] = useState<CasasS[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const casas = await getCasas();
  
        // Ordenar las casas por fecha de creación (_createdAt)
        const casasOrdenadas = casas.sort((a: CasasS, b: CasasS) => {
          const fechaA = new Date(a._createdAt || "").getTime();
          const fechaB = new Date(b._createdAt || "").getTime();
          return fechaB - fechaA; // Orden descendente, cambia a fechaA - fechaB para orden ascendente
        });
  
        setCasas(casasOrdenadas);
      } catch (error) {
        console.error('Error al encontrar --Casas--:', error);
      }
    }
  
    fetchData();
  }, []);

  const slides = casas.map((micasa) => (
    <SwiperSlide key={micasa._id} className={` ${style.swiperSlide}`}>
      <div 
      className="flex flex-col pb-12 mb-10 space-y-1 bg-white p-4 rounded-md border border-gray-400 shadow-md rounded-t-lg overflow-hidden transition-all hover:border-black hover:shadow-black">

        <div className="">
     
          <Image
            src={micasa.imagen_1}
            height={450}
            width={450}
            alt={micasa.imagen_1}
            layout={'cover'}
            objectFit={'cover'}
            className="w-full h-full cursor-grab no-select rounded-sm"
          />


        </div>

        <div className="flex space-x-4 pt-4 justify-center">

          <IoLocationSharp className="w-[40px] h-[40px] text-black">
          </IoLocationSharp>

          <div className="flex mt-auto">
              {micasa.ubicacionEnlace ? (
               <Link href={micasa.ubicacionEnlace as string}>
                 <h1 className="mt-auto text-black xl:text-xl lg:text-lg text-sm font-bold hover:text-blue-400">
                   {micasa.ubicacion}
                 </h1>
               </Link>
             ) : (
                <h1 className="mt-auto text-black xl:text-xl lg:text-lg text-sm font-bold">
                 {micasa.ubicacion}
                </h1>
             )}
           </div>


        </div>

        <div className="pt-2">
          <h2 className="text-black xl:text-2xl lg:text-xl text-md font-kanit text-center">
          {micasa.nombre}
          </h2>
        </div>

        <div className="flex space-x-6 lg:space-x-10 xl:space-x-14 pt-4 justify-evenly">

          <div className="flex space-x-2">

            <FaBed className="w-[35px] h-[35px] text-black">

            </FaBed>


            <h1 className="text-black xl:text-2xl lg:text-xl text-lg font-kanit">
            {micasa.dormitorios}
            </h1>

          </div>


          <div className="flex space-x-2 text-black">

            <FaBath className="w-[30px] h-[30px] text-black">

            </FaBath>


            <h1 className="text-black xl:text-2xl lg:text-xl text-lg font-kanit">
            {micasa.banos}
            </h1>

          </div>
          
        </div>

        <div className="flex space-x-6 lg:space-x-10 xl:space-x-14 pt-4 justify-evenly">

          <div className="flex space-x-2">

            <AiOutlineAreaChart className="w-[30px] h-[30px] text-black">

            </AiOutlineAreaChart>


            <h1 className="text-black xl:text-2xl lg:text-xl text-lg font-kanit">
            {micasa.metrosCuadrados}
            </h1>

          </div>


          <div className="flex space-x-2 text-black">

            <h1 className="text-black xl:text-2xl lg:text-xl text-lg font-kanit uppercase">
            {micasa.valor}
            </h1>

          </div>

          
        </div>


       <div className="flex space-x-6 lg:space-x-10 xl:space-x-14 pt-4">

          <div className="flex space-x-2 w-full justify-center items-center">
            
          <Link href={`/casas/${micasa.slug}`}>
          <h1 className={styles.button88}>
                   Ver más detalles
          </h1>
          </Link>


          </div>
          
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      className={`${style.swiperSlide}`}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        // Vista previa de 1 en pantallas móviles
        0: {
          slidesPerView: 1,
        },
        // Vista previa de 2 en tablets
        768: {
          slidesPerView: 2,
        },
        // Vista previa de 3 en pantallas más grandes
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {slides}
    </Swiper>
  );
}