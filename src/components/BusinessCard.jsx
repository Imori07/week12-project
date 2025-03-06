import Image from 'next/image';
import Link from 'next/link';

const BusinessCard = ({ data }) => {
  return (
    <div
      className='flex flex-col items-center gap-4 m-6 p-8 bg-gray-100 rounded-md'
      key={data.id}
    >
      <div className='w-[250px] h-[250px]'>
        <Image
          className='h-full w-full object-cover rounded-md'
          src={data.business_img}
          alt='Business'
          width={250}
          height={250}
          unoptimized
        />
      </div>
      <p className='font-bold text-gray-80'>{data.business_name}</p>
      <Link
        className='font-bold text-gray-800 text-center text-sm bg-white p-3 m-3 hover:bg-yellow-500 hover:scale-105 hover:brightness-110 rounded-md'
        href={`/foods/${data.id}`}
      >
        Discover More!
      </Link>
    </div>
  );
};

export default BusinessCard;
