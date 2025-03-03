import { fetchUserByClerkId } from '@/utils/api';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';

export default async function Header() {
  const user = await currentUser();

  if (!user) {
    return (
      <header className='p-4 flex justify-between items-center'>
        <Link href='/'>
          <h1 className='font-bold text-2xl'>Discover Norwich</h1>
        </Link>
        <div>
          <SignedOut>
            <SignInButton>
              <button className='bg-black text-white rounded-md m-2 p-1'>
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button className='bg-black text-white rounded-md m-2 p-1'>
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </header>
    );
  }

  const userdata = await fetchUserByClerkId(user.id);

  return (
    <header className='p-4 flex justify-between items-center'>
      <Link href='/'>
        <h1 className='font-bold text-2xl'>Discover Norwich</h1>
      </Link>
      <div>
        <SignedIn>
          <div className='flex items-center'>
            <Link
              href={`user-profile/${userdata?.username}`}
              className='text-white m-3 p-1 flex items-center rounded-xl bg-slate-600 hover:bg-slate-700'
            >
              Profile
            </Link>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
}
