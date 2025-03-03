"use client";
import { useState } from "react";
import Link from "next/link";



export default function BusinessLink({ mapsKey, placeId}) {
  const [show, setshow] = useState(0);
  console.log(mapsKey, placeId);

  return (
    <>
      <div className=" flex gap-2">
        <button
          onClick={() => {
            setshow(0);
          }}
          className="bg-amber-600 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Location
        </button>
        <button
          onClick={() => {
            setshow(1);
          }}
          className="bg-amber-600 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Opinions
        </button>
          <button onClick={() => {
            setshow(2);
          }}
          className="bg-amber-600 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
            New Comment
          </button>
       
      </div>
      <div className="flex flex-col items-center justify-center">
        {show === 0 && (
          <iframe
            width="600" height="400"
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=${mapsKey}`}
          ></iframe>
        )}
 
    
      </div>
    </>
  );
}
