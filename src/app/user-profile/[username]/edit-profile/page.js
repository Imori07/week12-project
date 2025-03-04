import { currentUser } from '@clerk/nextjs/server';

import { updateUserProfile } from '@/utils/actions';

const EditProfilePage = () => {
  const user = currentUser();
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form
        action={updateUserProfile}
        className='bg-white shadow-lg rounded-lg p-6 w-full max-w-lg'
      >
        <h2 className='text-2xl font-bold text-center text-gray-900 mb-6'>
          Edit Your Profile
        </h2>
        <input type='hidden' name='clerk_id' value={user.id} />
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-700'>
            First Name
          </label>
          <input
            type='text'
            name='first_name'
            placeholder='Enter your first name'
            className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-700'>
            Last Name
          </label>
          <input
            type='text'
            name='last_name'
            placeholder='Enter your last name'
            className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-700'>
            Location
          </label>
          <input
            type='text'
            name='location'
            placeholder='Enter your location'
            className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-700'>
            Bio
          </label>
          <textarea
            name='bio'
            placeholder='Tell us about yourself...'
            className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-700'>
            Profile Picture
          </label>
          <input
            type='text'
            name='user_img'
            className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;
