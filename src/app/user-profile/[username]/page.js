import { fetchUser } from "@/utils/api";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaUserEdit } from "react-icons/fa";
import "@/styles/user-profile.css"; // I decided to do it in separate style file

export const generateMetadata = async ({ params }) => {
  const { username } = params;
  const user = await fetchUser(username);

  return {
    title: `${user.first_name} ${user.last_name} - (${user.username})`,
    description: `Viewing ${user.first_name} ${user.last_name}'s profile page.`,
  };
};
//comment
export default async function UserPage({ params }) {
  const { username } = params;
  const user = await fetchUser(username);
  const signedInUser = await currentUser();

  if (!user) notFound();

  return (
    <div className="user-profile-container">
      <div className="user-profile-card">
        <div className="flex flex-col items-center">
          <img
            src={user.user_img || "/default-avatar.png"}
            alt="User Avatar"
            className="user-avatar"
          />
          <h1 className="user-name">
            {user.first_name} {user.last_name}
          </h1>
          <p className="user-username">@{user.username}</p>
        </div>

        <div className="user-info">
          <p>
            <span className="font-semibold">Bio:</span>{" "}
            {user.bio || "No bio available."}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Location:</span>{" "}
            {user.location || "Not specified"}
          </p>
        </div>

        {signedInUser?.id === user.clerk_id && (
          <div className="edit-profile-button">
            <Link
              className="flex items-center"
              href={`${username}/edit-profile`}
            >
              <span className="mr-1">Edit profile</span> <FaUserEdit />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
