import { fetchUser } from '@/utils/api';
import { notFound } from 'next/navigation';

export default async function UserPage({ params }) {
  const { username } = await params;
  const user = await fetchUser(username);

  console.log(user);

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
