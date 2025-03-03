import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
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
              className='bg-slate-900 p-2 m-2 rounded-lg hover:bg-slate-800'
              href='/posts'
            >
              Posts
            </Link>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
}
