"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Utensils,
  Hotel,
  Dumbbell,
  Trees
} from "lucide-react";


const navLinks = [
  {
    id:1,
    label: "Food & Drinks",
    href: "/foods",
    icon: <Utensils size={50} />,
    gradient: "from-orange-300 to-orange-700",
  },
  {
    id:2,
    label: "Hotels",
    href: "/hotels",
    icon: <Hotel size={50} />,
    gradient: "from-cyan-300 to-cyan-700",
  },
  {
    id:3,
    label: "Parks",
    href: "/parks",
    icon: <Trees size={50} />,
    gradient: "from-green-300 to-green-700",
  },
  {
    id:4,
    label: "Sport & Excercise",
    href: "/sports",
    icon: <Dumbbell size={50} />,
    gradient: "from-indigo-300 to-indigo-700",
  },
  
];



export default function HomePage() {
    return (
    <>

 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 place-items-center">
     
    {
    navLinks.map((data) => (
             <div key={data.id}>
        

<Link
    href={data.href}
    className={`flex flex-col items-center justify-center h-[120px] w-[100px] sm:h-[180px] sm:w-[220px] text-center 
               text-white border border-gray-300 rounded-xl shadow-md font-semibold 
               transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
               bg-gradient-to-r ${data.gradient} hover:brightness-110`}
  >
    {data.icon}
    <span className="mt-3 text-lg">{data.label}</span>
  </Link>
            
             </div>
           ))}
           </div>
    
    </>


    )
}