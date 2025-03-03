import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
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
        <SignedIn>
          <div className='flex items-center'>
            <Link
              href='/createPost'
              className='text-white m-3 p-1 flex items-center rounded-xl bg-slate-600 hover:bg-slate-700'
            >
              <FaPlus className='mr-1' />
              <span>Create</span>
            </Link>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
}
