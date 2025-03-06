'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BusinessCard from './BusinessCard';

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
          businessId.map((data) => <BusinessCard data={data} key={data.id} />)}
        {show === 1 &&
          Restaurant.map((data) => <BusinessCard data={data} key={data.id} />)}
        {show === 2 &&
          cafe.map((data) => <BusinessCard data={data} key={data.id} />)}
        {show === 3 &&
          Bars.map((data) => <BusinessCard data={data} key={data.id} />)}
      </div>
    </>
  );
}
