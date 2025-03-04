'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';
import { db } from './dbConnection';

export const createuser = async (formData) => {
  const id = formData.get('clerk_id');
  const firstName = formData.get('first_name');
  const lastName = formData.get('last_name');
  const username = formData.get('username');
  const location = formData.get('location');
  const bio = formData.get('bio');
  const userImg = formData.get('user_img');

  await db.query(
    `INSERT INTO users (clerk_id, first_name, last_name, username, location, bio, user_img) 
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [id, firstName, lastName, username, location, bio, userImg]
  );

  redirect(`/user-profile/${username}`);
};

export const updateUserProfile = async (formData) => {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized: No user ID found.');

  const postId = formData.get('id');
  const title = formData.get('title');
  const description = formData.get('content');
  const image = formData.get('image');

  const result = await db.query(
    `
    UPDATE user_posts
    SET title = $1, description = $2, image = $3
    WHERE id = $4 AND user_id = (SELECT id FROM users WHERE clerk_id = $5)
    RETURNING *
    `,
    [title, description, image, postId, userId]
  );

  if (result.rowCount === 0) {
    throw new Error('Unauthorized: Post not found or user mismatch.');
  }

  revalidatePath(`/posts`);
  redirect(`/posts`);
};
