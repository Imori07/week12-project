import { fetchUser } from '@/utils/api';
import { notFound } from 'next/navigation';

export default async function UserPage({ params }) {
  const { username } = await params;
  const user = await fetchUser(username);

  console.log(user);

  if (!user) notFound();

  return (
    <div>
      <h1>{user.first_name}</h1>
    </div>
  );
}
