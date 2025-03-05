"use client";
import { Home, CirclePlus, CircleUser,MapPinned } from "lucide-react";
import Link from "next/link";


const footerLinks = [
  { label: "Home", href: "/", icon: <Home size={40} /> },
  { label: "Add", href: "/suggest", icon: <CirclePlus size={40} /> },
  { label: "NearMe", href: "/NearMeYelp", icon: <MapPinned size={40} /> },
  { label: "Profile", href: "/createProfile", icon: <CircleUser size={40} /> },
];

const FooterCard = ({ link }) => (
  <Link
    href={link.href}
    className="flex flex-col items-center text-black justify-center w-full p-2 transition-all duration-300
               transform hover:scale-110 hover:text-amber-500"
  >
    {link.icon}
    {/* <span className="text-sm font-medium mt-1">{link.label}</span> */}
  </Link>
);

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-2xl">
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {footerLinks.map((link) => (
          <FooterCard link={link} key={link.label} />
        ))}
      </div>
    </div>
  );
}
