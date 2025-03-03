import { fetchUser } from '@/utils/api';
import { notFound } from 'next/navigation';

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

  if (!user) notFound();

  return (
    <div>
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <img src={user.user_img} width={100} />
      <p>bio: {user.bio}</p>
      <p>location: {user.location}</p>
    </div>
  );
}
