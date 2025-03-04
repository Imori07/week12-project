"use client";
import { useState } from "react";
import Link from "next/link";
import { User } from "lucide-react";



export default function BusinessLink({commentdata, mapsKey, placeId,businessId}) {
  const [show, setshow] = useState(0);
  console.log(mapsKey, placeId);

  return (
    <>
      <div className=" flex gap-2">
        <button
          onClick={() => {
            setshow(0);
          }}
          className="bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Location
        </button>
        <button
          onClick={() => {
            setshow(1);
          }}
          className="bg-amber-500 m-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Reviews
        </button>
        <Link href={`/CreateReviews/${businessId}`}>
          <button className="bg-amber-500 m-2  hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg">
            New comment
          </button>
        </Link>
       
      </div>
      <div className="flex flex-col items-center justify-center">
        {show === 0 && (
          <iframe
            width="500" height="400"
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=${mapsKey}`}
          ></iframe>
        )}

          {show === 1 && 
          commentdata.map((data) => (
              <div className="" key={data.id}>
                <div className="w-[500px] bg-amber-50 shadow-lg rounded-lg p-10 mt-6 ">
                <h1 className="text-xl text-red-950 font-bold flex items-center">
                  <span className="mr-2">
                    <User />
                  </span>
                  {data.username}:
                </h1>
                <h2 className=" text-amber-700">"{data.comment}"</h2>
                <p className="text-2xl text-amber-950 text-[7px]">
                  {data.date}
                </p>
                </div>
              </div>
            ))}

 
    
      </div>
    </>
  );
}
