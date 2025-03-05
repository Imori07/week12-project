
import MapLocation from "@/components/MapLocation"
import Link from "next/link";


export default function UserLocation(){
  const mapsKey = process.env.MAPS_API_KEY;
  return (
    <>
<div className="flex flex-col items-center gap-4 w-full bg-white m-6">
    <MapLocation mapsKey={mapsKey}/>
    <Link
            href={"/NearMeYelp"}
            className="w-1/4 p-2 rounded-md bg-gray-600 text-white text-center font-bold hover:bg-gray-700 transition"
          >
            ← Back
          </Link>
          </div>
    </>
  )
}