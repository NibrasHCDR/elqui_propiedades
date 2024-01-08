/* eslint-disable jsx-a11y/alt-text */
"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import style from '../styles/swiper.module.css'

// import required modules
import { Pagination } from 'swiper/modules';
import { FcSalesPerformance } from "react-icons/fc";

import { IoBed } from "react-icons/io5";
import { FaBath, FaChartArea } from "react-icons/fa";
import { TerrenosS } from '@/types/TerrenosS';
import { getTerrenos } from '@/sanity/sanity-utils';

export const dynamic = 'force-dynamic';
export const revalidate = 1;

export default function App() {
  const [terreno, setTerreno] = useState<TerrenosS[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const terrenos = await getTerrenos();
        setTerreno(terrenos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const slides = terreno.map((miterreno) => (
    <SwiperSlide key={miterreno._id} className={` ${style.swiperSlide}`}>
      <div 
      className="flex flex-col pb-12 mb-10 space-y-1 bg-white p-4 rounded-md border border-gray-400 shadow-md rounded-t-lg overflow-hidden transition-all hover:border-[#385AE0] hover:shadow-[#385AE0]">

        <div className="">
     
          <Image
            src={miterreno.imagen_1}
            height={450}
            width={450}
            alt={miterreno.imagen_1}
            layout={'cover'}
            objectFit={'cover'}
            className="w-full h-full cursor-grab no-select rounded-sm"
          />


        </div>

        <div className="flex space-x-4 pt-4">

          <FcSalesPerformance className="w-[40px] h-[40px]">
          </FcSalesPerformance>

          <h1 className="mt-auto text-black xl:text-2xl lg:text-xl text-lg font-oswald uppercase">
          {miterreno.valor}
          </h1>

        </div>

        <div className="pt-2">
          <h2 className="text-black xl:text-2xl lg:text-xl text-md font-inconsolata">
          {miterreno.nombre}
          </h2>
        </div>

        <div className="flex space-x-6 lg:space-x-10 xl:space-x-14 pt-4">

          <div className="flex space-x-2">

            <IoBed className="w-[35px] h-[35px] text-[#385AE0]">

            </IoBed>


            <h1 className="text-[#385AE0] xl:text-2xl lg:text-xl text-lg font-oswald uppercase">
            {miterreno.cantidadDormitorios}
            </h1>

          </div>

          <div className="flex space-x-2">
 
            <FaBath className="w-[30px] h-[30px] text-[#385AE0]">

            </FaBath>


            <h1 className="text-[#385AE0] xl:text-2xl lg:text-xl text-lg font-oswald uppercase">
            {miterreno.cantidadBanos}
            </h1>

          </div>

          <div className="flex space-x-2 text-[#385AE0]">

            <FaChartArea className="w-[33px] h-[33px]">

            </FaChartArea>


            <h1 className="text-[#385AE0] xl:text-2xl lg:text-xl text-lg font-oswald uppercase">
            {miterreno.metrosCuadrados}
            </h1>

          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      className={` ${style.swiperSlide}`}
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