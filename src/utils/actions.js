"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { db } from "./dbConnection";

export const createuser = async (formData) => {
  const id = formData.get("clerk_id");
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const username = formData.get("username");
  const location = formData.get("location");
  const bio = formData.get("bio");
  const userImg = formData.get("user_img");

  await db.query(
    `INSERT INTO users (clerk_id, first_name, last_name, username, location, bio, user_img) 
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [id, firstName, lastName, username, location, bio, userImg]
  );

  redirect(`/user-profile/${username}`);
};

export const updateUserProfile = async (formData) => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized: No user ID found.");

  const clerkId = formData.get("clerk_id");
  const bio = formData.get("bio");
  const image = formData.get("user_img");

  const result = await db.query(
    `UPDATE users
    SET bio = $1, user_img = $2
    WHERE clerk_id = $3
    RETURNING username
    `,
    [bio, image, clerkId]
  );

  if (result.rowCount === 0) {
    throw new Error("Unauthorized: User mismatch.");
  }

  const { username } = result.rows[0];
  revalidatePath(`/user-profile/${username}`);
  redirect(`/user-profile/${username}`);
};
//comments section
export async function fetchUserComments(username) {
  const result = await db.query(
    `SELECT id, body, created_at FROM comments WHERE user_id = (SELECT id FROM users WHERE username = $1) ORDER BY created_at DESC`,
    [username]
  );

  return result.rows;
}
