'use client';
import { useState, useEffect } from 'react';
export default function Location({ mapsKey }) {
  const [location, setLocation] = useState(null);
  const [show, setshow] = useState(0);
  useEffect(() => {
    const getUserLocation = () => {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) =>
          resolve(position.coords)
        );
      });
    };
    const fetchData = async () => {
      const { latitude, longitude } = await getUserLocation();
      setLocation({ latitude, longitude });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='flex flex-col items-center gap-4 w-full bg-white m-6'>
        <div className=' flex gap-2 flex-row items-center text-center justify-center '>
          <button
            onClick={() => {
              setshow(0);
            }}
            className='bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg'
          >
            Restaurant
          </button>
          <button
            onClick={() => {
              setshow(1);
            }}
            className='bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg'
          >
            Cafe
          </button>
          <button
            onClick={() => {
              setshow(2);
            }}
            className='bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg'
          >
            Bars
          </button>
          <button
            onClick={() => {
              setshow(3);
            }}
            className='bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg'
          >
            Hotels
          </button>
          <button
            onClick={() => {
              setshow(4);
            }}
            className='bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg'
          >
            Parks
          </button>
          <button
            onClick={() => {
              setshow(5);
            }}
            className='bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg'
          >
            Sport & Excercise
          </button>
        </div>
        {show === 0 &&
          (location ? (
            <div className='text-xl'>
              <strong>Your Location is </strong>: {location.latitude},{' '}
              {location.longitude}{' '}
              <div>
                {' '}
                <iframe
                  width='650'
                  height='450'
                  loading='lazy'
                  src={`https://www.google.com/maps/embed/v1/search?q=Restaurants&language=en&zoom=13&center=${location.latitude},${location.longitude}&key=${mapsKey}`}
                ></iframe>
              </div>
            </div>
          ) : (
            <p>Fetching location...</p>
          ))}

        {show === 1 &&
          (location ? (
            <div className='text-xl'>
              <strong>Your Location is </strong>: {location.latitude},{' '}
              {location.longitude}{' '}
              <div>
                {' '}
                <iframe
                  width='650'
                  height='450'
                  loading='lazy'
                  src={`https://www.google.com/maps/embed/v1/search?q=cafe&language=en&zoom=13&center=${location.latitude},${location.longitude}&key=${mapsKey}`}
                ></iframe>
              </div>
            </div>
          ) : (
            <p>Fetching location...</p>
          ))}
        {show === 2 &&
          (location ? (
            <div className='text-xl'>
              <strong>Your Location is </strong>: {location.latitude},{' '}
              {location.longitude}{' '}
              <div>
                {' '}
                <iframe
                  width='650'
                  height='450'
                  loading='lazy'
                  src={`https://www.google.com/maps/embed/v1/search?q=bars&language=en&zoom=13&center=${location.latitude},${location.longitude}&key=${mapsKey}`}
                ></iframe>
              </div>
            </div>
          ) : (
            <p>Fetching location...</p>
          ))}

        {show === 3 &&
          (location ? (
            <div className='text-xl'>
              <strong>Your Location is </strong>: {location.latitude},{' '}
              {location.longitude}{' '}
              <div>
                {' '}
                <iframe
                  width='650'
                  height='450'
                  loading='lazy'
                  src={`https://www.google.com/maps/embed/v1/search?q=hotels&language=en&zoom=13&center=${location.latitude},${location.longitude}&key=${mapsKey}`}
                ></iframe>
              </div>
            </div>
          ) : (
            <p>Fetching location...</p>
          ))}
        {show === 4 &&
          (location ? (
            <div className='text-xl'>
              <strong>Your Location is </strong>: {location.latitude},{' '}
              {location.longitude}{' '}
              <div>
                {' '}
                <iframe
                  width='650'
                  height='450'
                  loading='lazy'
                  src={`https://www.google.com/maps/embed/v1/search?q=parks&language=en&zoom=13&center=${location.latitude},${location.longitude}&key=${mapsKey}`}
                ></iframe>
              </div>
            </div>
          ) : (
            <p>Fetching location...</p>
          ))}
      </div>
    </>
  );
}
