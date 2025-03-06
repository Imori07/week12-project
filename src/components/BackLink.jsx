import Link from 'next/link';

const BackLink = ({ href }) => {
  return (
    <Link
      href={`${href}`}
      className='w-1/4 p-2 rounded-md bg-gray-600 text-white text-center font-bold hover:bg-gray-700 transition'
    >
      ← Back
    </Link>
  );
};

export default BackLink;
