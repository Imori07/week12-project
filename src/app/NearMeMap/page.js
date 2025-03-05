
import MapLocation from "@/components/MapLocation"


export default function UserLocation(){
  const mapsKey = process.env.MAPS_API_KEY;
  return (
    <>

    <MapLocation mapsKey={mapsKey}/>
    </>
  )
}