/* eslint-disable jsx-a11y/alt-text */
"use client"

// SwiperTerreno.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import { IoLocationSharp } from 'react-icons/io5';
import { IoBed } from 'react-icons/io5';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { TerrenosS } from '@/types/TerrenosS';
import { getTerreno } from '@/sanity/sanity-utils';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';


interface SwiperTerrenoProps {
  slug: string;
}

export default function SwiperTerreno({ slug }: SwiperTerrenoProps) {
  const [terreno, setTerreno] = useState<TerrenosS | null>(null);

  useEffect(() => {
    const fetchTerreno = async () => {
      try {
        const fetchedTerreno = await getTerreno(slug);
        setTerreno(fetchedTerreno);
      } catch (error) {
        console.error('Error fetching terreno in SwiperTerreno:', error);
      }
    };

    fetchTerreno();
  }, [slug]);

  if (!terreno) {
    return <div className="w-full h-full">Loading...</div>;
  }

  return (
    <Swiper
    direction={'vertical'}
    slidesPerView={1}
    spaceBetween={30}
    mousewheel={true}
    pagination={{
      clickable: true,
    }}
    modules={[Mousewheel, Pagination]}
    className=" grid"
  >
      <SwiperSlide className="grid">
        {terreno.imagen_1 ? (
          <div className="flex w-full h-full">
            <div className="w-full h-full">
              <Image
                src={terreno.imagen_1}
                height={650}
                width={650}
                alt={terreno.imagen_1}
                layout={'cover'}
                objectFit={'cover'}
                className="w-full h-full cursor-grab no-select"
              />
            </div>
          </div>
        ) : (
          // You can provide a default image here
          <div className="flex w-full h-auto">
            <div className="w-full h-full">
              <Image
                src="https://i.postimg.cc/RFqZsxyP/wallhaven-4v1exm.png" // Update with the path to your default image
                height={650}
                width={650}
                alt="Default Image"
                layout={'cover'}
                objectFit={'cover'}
                className="w-full h-full cursor-grab no-select"
              />
            </div>
          </div>
        )}
      </SwiperSlide>

      <SwiperSlide className="">
        {terreno.imagen_2 ? (
          <div className="flex w-full h-auto">
            <div className="w-full h-full">
              <Image
                src={terreno.imagen_2}
                height={450}
                width={450}
                alt={terreno.imagen_2}
                layout={'cover'}
                objectFit={'cover'}
                className="w-full h-full cursor-grab no-select"
              />
            </div>
          </div>
        ) : (
          // Provide a default image for imagen_2
          <div className="flex w-full h-full">
            <div className="w-full h-full">
              <Image
                src="https://i.postimg.cc/RFqZsxyP/wallhaven-4v1exm.png" // Update with the path to your default image for imagen_2
                height={450}
                width={450}
                alt="Default Image 2"
                layout={'cover'}
                objectFit={'cover'}
                className="w-full h-full cursor-grab no-select"
              />
            </div>
          </div>
        )}
      </SwiperSlide>
      {/* Add more slides as needed */}

      <SwiperSlide className="">
        {terreno.imagen_3 ? (
          <div className="flex w-full h-auto">
            <div className="w-full h-full">
              <Image
                src={terreno.imagen_3}
                height={450}
                width={450}
                alt={terreno.imagen_3}
                layout={'cover'}
                objectFit={'cover'}
                className="w-full h-full cursor-grab no-select"
              />
            </div>
          </div>
        ) : (
          // Provide a default image for imagen_2
          <div className="flex w-full h-full">
            <div className="w-full h-full">
              <Image
                src="https://i.postimg.cc/RFqZsxyP/wallhaven-4v1exm.png" // Update with the path to your default image for imagen_2
                height={450}
                width={450}
                alt="Default Image 3"
                layout={'cover'}
                objectFit={'cover'}
                className="w-full h-full cursor-grab no-select"
              />
            </div>
          </div>
        )}
      </SwiperSlide>
      {/* Add more slides as needed */}

      <SwiperSlide className="">
        {terreno.imagen_4 ? (
          <div className="flex w-full h-auto">
            <div className="w-full h-full">
              <Image
                src={terreno.imagen_4}
                height={450}
                width={450}
                alt={terreno.imagen_4}
                layout={'cover'}
                objectFit={'cover'}
                className="w-full h-full cursor-grab no-select"
              />
            </div>
          </div>
        ) : (
          // Provide a default image for imagen_2
          <div className="flex w-full h-full">
            <div className="w-full h-full">
              <Image
                src="https://i.postimg.cc/RFqZsxyP/wallhaven-4v1exm.png" // Update with the path to your default image for imagen_2
                height={450}
                width={450}
                alt="Default Image 4"
                layout={'cover'}
                objectFit={'cover'}
                className="w-full h-full cursor-grab no-select"
              />
            </div>
          </div>
        )}
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
}