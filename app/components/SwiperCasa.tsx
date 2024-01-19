/* eslint-disable jsx-a11y/alt-text */
"use client"

// SwiperCasa.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import { getCasa } from '@/sanity/sanity-utils';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { CasasS } from '@/types/CasasS';


interface SwiperCasaProps {
  slug: string;
}

export default function SwiperCasa({ slug }: SwiperCasaProps) {
  const [casa, setCasa] = useState<CasasS | null>(null);

  useEffect(() => {
    const fetchCasa = async () => {
      try {
        const fetchedCasa = await getCasa(slug);
        setCasa(fetchedCasa);
      } catch (error) {
        console.error('Error fetching casa in SwiperCasa:', error);
      }
    };

    fetchCasa();
  }, [slug]);

  if (!casa) {
    return <div className="w-full h-full">Loading...</div>;
  }

  const slides: JSX.Element[] = [];

  for (let index = 1; index <= 6; index++) {
    const imagenKey = `imagen_${index}` as keyof CasasS;

    if (casa[imagenKey]) {
      slides.push(
        <SwiperSlide key={index} className="grid">
          <div className="flex w-full h-full">
            <div className="w-full h-full">
              <Image
                src={casa[imagenKey] as string}
                height={650}
                width={650}
                alt={casa[imagenKey] as string}
                layout={'cover'}
                objectFit={'cover'}
                className="w-full h-full cursor-grab no-select"
              />
            </div>
          </div>
        </SwiperSlide>
      );
    }
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
      className="swiperPagColor2 grid"
    >
      {slides}
    </Swiper>
  );
}