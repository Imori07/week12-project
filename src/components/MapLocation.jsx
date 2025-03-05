"use client";
import React, { useState } from 'react';
export default function Location({mapsKey}) {
    const [location, setLocation] = useState(null);
    
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
      
  return(
    <>
    <div className="flex flex-col items-center gap-4 w-full bg-white m-6">
      {location ? (
        <p className='text-xl'>
         <strong>Your Location is </strong>: {location.latitude}, {location.longitude} <iframe width="850" height="550" loading="lazy"
            src={`https://www.google.com/maps/embed/v1/search?q=Restaurants&language=en&zoom=13&center=${location.latitude},${location.longitude}&key=${mapsKey}`}></iframe>

        </p>
      ) : (
        <p>Fetching location...</p>
        
        
      )}
  
      </div>
    </>
  )    
}