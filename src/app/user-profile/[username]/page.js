import { fetchUser, fetchUserComments } from "@/utils/api"; // Fetch user & comments
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaUserEdit } from "react-icons/fa";
import "@/styles/user-profile.css"; // External CSS file
import { db } from '@/utils/dbConnection';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const generateMetadata = async ({ params }) => {
  const { username } = params;
  const user = await fetchUser(username);

  return {
    title: `${user.first_name} ${user.last_name} - (${user.username})`,
    description: `Viewing ${user.first_name} ${user.last_name}'s profile page.`,
  };
};

export default async function UserPage({ params }) {
  const { username } = params;
  const user = await fetchUser(username);
  const signedInUser = await currentUser();
  const comments = await fetchUserComments(username); // Fetch user comments
  console.log(comments);
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

        {/* Comments Section */}
        <div className="user-comments">
          <h2 className="comments-title">Your Comments</h2>
          {comments.length > 0 ? (
            <ul className="comments-list">
              {comments.map((comment) => (
                <li key={comment.id} className="comment-item">
                  <p className="comment-text"><strong>{comment.business_name}</strong></p>
                  <p className="comment-text">{comment.comment}</p>
                  <span className="comment-date">
                    {new Date(comment.created_at).toLocaleString()}
                  </span>
                  <button type="submit" onClick={ async function deletedata() {
    "use server";
    await db.query("DELETE FROM reviews WHERE id = $1", [comment.id]);
    revalidatePath(`/user-profile/${username}`);
    redirect(`/user-profile/${username}`);

}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg">delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-comments">This user has not commented yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
