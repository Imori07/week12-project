import { fetchUser } from '@/utils/api';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaUserEdit } from 'react-icons/fa';

export const generateMetadata = async ({ params }) => {
  const { username } = await params;
  const user = await fetchUser(username);

  return {
    title: `${user.first_name} ${user.last_name}-(${user.username})`,
    description: `Viewing ${user.first_name} ${user.last_name}'s profile page.`,
  };
};

export default async function UserPage({ params }) {
  const { username } = await params;
  const user = await fetchUser(username);
  console.log('user', user);

  if (!user) notFound();

  return (
    <div>
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <p>username: {user.username}</p>
      <img src={user.user_img} width={100} />
      <p>bio: {user.bio}</p>
      <p>location: {user.location}</p>
      <Link className='flex items-center' href={`${username}/edit-profile`}>
        <span className='mr-1'>Edit profile</span> <FaUserEdit />
      </Link>
    </div>
  );
}
