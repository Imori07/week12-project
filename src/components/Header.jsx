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
        <h1 className='font-bold text-2xl'>Name of site</h1>
      </Link>
      <div>
        <SignedOut>
          <SignInButton>
            <button className='m-2'>Sign in</button>
          </SignInButton>
          <SignUpButton>
            <button className='m-2'>Sign Up</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <div className='flex items-center'>
            <Link
              href='/new-post'
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
