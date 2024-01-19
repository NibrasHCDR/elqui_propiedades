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
import 'swiper/css/scrollbar';
import style from '../styles/swiper.module.css'

// import required modules
import { Pagination, Scrollbar } from 'swiper/modules';
import { IoLocationSharp } from "react-icons/io5";

import { AiOutlineAreaChart } from "react-icons/ai";
import { TerrenosS } from '@/types/TerrenosS';
import { getTerrenos } from '@/sanity/sanity-utils';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const revalidate = 1;

export default function App() {
  const [terreno, setTerreno] = useState<TerrenosS[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const terrenos = await getTerrenos();

        // Ordenar los terrenos por fecha de creación (_createdAt)
        const terrenosOrdenados = terrenos.sort((a: TerrenosS, b: TerrenosS) => {
          const fechaA = new Date(a._createdAt || "").getTime();
          const fechaB = new Date(b._createdAt || "").getTime();
          return fechaB - fechaA; // Orden descendente, cambia a fechaA - fechaB para orden ascendente
        });

        setTerreno(terrenosOrdenados);
      } catch (error) {
        console.error('Error al encontrar --Terrenos--:', error);
      }
    }

    fetchData();
  }, []);

  const slides = terreno.map((miterreno) => (
    <SwiperSlide key={miterreno._id} className={` ${style.swiperSlide}`}>
      <div 
      className="flex flex-col cursor-grab pb-12 mb-10 space-y-1 bg-white p-4 rounded-md border border-gray-400 shadow-md rounded-t-lg overflow-hidden transition-all hover:border-black hover:shadow-black">

        <div className="">
     
          <Image
            src={miterreno.imagen_1}
            height={450}
            width={450}
            alt={miterreno.imagen_1}
            layout={'cover'}
            objectFit={'cover'}
            className="w-full h-full no-select rounded-sm"
          />


        </div>

        <div className="flex space-x-4 pt-4">

          <IoLocationSharp className="w-[40px] h-[40px]">
          </IoLocationSharp>

           <div className="flex mt-auto">
              {miterreno.ubicacionEnlace ? (
               <Link href={miterreno.ubicacionEnlace as string}>
                 <h1 className="mt-auto text-black xl:text-xl lg:text-lg text-sm font-bold hover:text-blue-400">
                   {miterreno.ubicacion}
                 </h1>
               </Link>
             ) : (
                <h1 className="mt-auto text-black xl:text-xl lg:text-lg text-sm font-bold">
                 {miterreno.ubicacion}
                </h1>
             )}
           </div>

        </div>

        <div className="pt-2">
          <h2 className="text-black xl:text-2xl lg:text-xl text-md font-kanit">
          {miterreno.nombre}
          </h2>
        </div>

        <div className="flex space-x-6 lg:space-x-10 xl:space-x-14 pt-4">

          <div className="flex space-x-2">

            <AiOutlineAreaChart className="w-[35px] h-[35px] text-black">

            </AiOutlineAreaChart>


            <h1 className="text-black xl:text-2xl lg:text-xl text-lg font-kanit">
            {miterreno.metrosCuadrados}
            </h1>

          </div>


          <div className="flex space-x-2 text-black">

            <h1 className="text-black xl:text-2xl lg:text-xl text-lg font-kanit uppercase">
            {miterreno.valor}
            </h1>

          </div>

          
        </div>

       <div className="flex space-x-6 lg:space-x-10 xl:space-x-14 pt-4">

          <div className="flex space-x-2 w-full justify-center items-center">
            
          <Link href={`/terrenos/${miterreno.slug}`}>
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