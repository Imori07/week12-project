import BackLink from '@/components/BackLink';
import MapLocation from '@/components/MapLocation';
import Link from 'next/link';

export default function UserLocation() {
  const mapsKey = process.env.MAPS_API_KEY;
  return (
    <>
      <div className='flex flex-col items-center gap-4 w-full bg-white m-6'>
        <MapLocation mapsKey={mapsKey} />

        <BackLink href='/NearMeYelp' />
      </div>
    </>
  );
}
