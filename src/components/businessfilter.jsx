'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BusinessFilter({ businessId, cafe, Bars, Restaurant }) {
  const [show, setshow] = useState(0);

  return (
    <>
      <div className=' flex gap-2 flex-row items-center text-center justify-center '>
        <button
          onClick={() => {
            setshow(0);
          }}
          className='bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg'
        >
          Foods & Drinks
        </button>
        <button
          onClick={() => {
            setshow(1);
          }}
          className='bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg'
        >
          Restaurant
        </button>
        <button
          onClick={() => {
            setshow(2);
          }}
          className='bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg'
        >
          Cafe
        </button>
        <button
          onClick={() => {
            setshow(3);
          }}
          className='bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg'
        >
          Bars
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {show === 0 &&
          businessId.map((data) => (
            <div
              className='flex flex-col items-center gap-4 m-6 p-8 bg-gray-100 rounded-md'
              key={data.id}
            >
              <div className='w-[250px] h-[250px]'>
                <Image
                  className='h-full w-full object-cover rounded-md'
                  src={data.business_img}
                  alt='Business'
                  width={250}
                  height={250}
                  unoptimized
                />
              </div>
              <p className='font-bold text-gray-80'>{data.business_name}</p>
              <Link
                className='text-gray-800 text-center text-sm bg-white p-3 m-3 hover:bg-yellow-500 hover:scale-105 hover:brightness-110 rounded-md'
                href={`/foods/${data.id}`}
              >
                Discover More!
              </Link>
            </div>
          ))}
        {show === 1 &&
          Restaurant.map((data) => (
            <div
              className='flex flex-col items-center gap-4 m-6 p-6 bg-gray-100'
              key={data.id}
            >
              <div className='w-[250px] h-[250px]'>
                <Image
                  className='h-full w-full object-cover'
                  src={data.business_img}
                  alt='Business'
                  width={250}
                  height={250}
                  unoptimized
                />
              </div>
              <h1 className='text-gray-800 bg-white'>{data.business_name}</h1>
              <Link
                className='text-gray-800 text-center text-sm bg-white p-3 m-3 hover:bg-yellow-500 hover:scale-105 hover:brightness-110'
                href={`/foods/${data.id}`}
              >
                Discover More!
              </Link>
            </div>
          ))}
        {show === 2 &&
          cafe.map((data) => (
            <div
              className='flex flex-col items-center gap-4 m-6 p-6 bg-gray-100'
              key={data.id}
            >
              <div className='w-[250px] h-[250px]'>
                <Image
                  className='h-full w-full object-cover'
                  src={data.business_img}
                  alt='Business'
                  width={250}
                  height={250}
                  unoptimized
                />
              </div>
              <h1 className='text-gray-800 bg-white'>{data.business_name}</h1>
              <Link
                className='text-gray-800 text-center text-sm bg-white p-3 m-3 hover:bg-yellow-500 hover:scale-105 hover:brightness-110'
                href={`/foods/${data.id}`}
              >
                Discover More!
              </Link>
            </div>
          ))}
        {show === 3 &&
          Bars.map((data) => (
            <div
              className='flex flex-col items-center gap-4 m-6 p-6 bg-gray-100'
              key={data.id}
            >
              <div className='w-[250px] h-[250px]'>
                <Image
                  className='h-full w-full object-cover'
                  src={data.business_img}
                  alt='Business'
                  width={250}
                  height={250}
                  unoptimized
                />
              </div>
              <h1 className='text-gray-800 bg-white'>{data.business_name}</h1>
              <Link
                className='text-gray-800 text-center text-sm bg-white p-3 m-3 hover:bg-yellow-500 hover:scale-105 hover:brightness-110'
                href={`/foods/${data.id}`}
              >
                Discover More!
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
