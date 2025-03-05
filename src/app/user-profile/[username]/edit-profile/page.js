<<<<<<< HEAD
import { currentUser } from '@clerk/nextjs/server';
import { fetchUser } from '@/utils/api';
import { updateUserProfile } from '@/utils/actions';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import SubmitButton from '@/components/SubmitButton';
=======
import { currentUser } from "@clerk/nextjs/server";
import { fetchUser } from "@/utils/api";
import { updateUserProfile } from "@/utils/actions";
import { redirect } from "next/navigation";
import Link from "next/link";
>>>>>>> ae7a9be (Profile page style using external css file)

export const generateMetadata = async ({ params }) => {
  const { username } = await params;
  const user = await fetchUser(username);

  return {
    title: `Edit Profile - ${user.username}`,
    description: `Edit page for ${user.first_name} ${user.last_name}'s profile page.`,
  };
};

const EditProfilePage = async ({ params }) => {
  const { username } = params;
  const user = await currentUser();
  const dbUser = await fetchUser(username);

  if (!user || !dbUser || user.id !== dbUser.clerk_id) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        action={updateUserProfile}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Edit Your Profile
        </h2>
        <input type="hidden" name="clerk_id" value={user.id} />

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">
            Bio
          </label>
          <textarea
            name="bio"
            defaultValue={dbUser.bio}
            placeholder="Tell us about yourself..."
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">
            Profile Picture
          </label>
          <input
            type="text"
            name="user_img"
            defaultValue={dbUser.user_img}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex gap-2 mt-4">
          <Link
            href={`/user-profile/${username}`}
            className="w-1/4 p-2 rounded-md bg-gray-600 text-white text-center font-bold hover:bg-gray-700 transition"
          >
            ← Back
          </Link>
<<<<<<< HEAD
          <SubmitButton
            text='Submit'
            classNames='w-3/4 bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition disabled:bg-blue-600'
          />
=======
          <button
            type="submit"
            className="w-3/4 bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
>>>>>>> ae7a9be (Profile page style using external css file)
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;
