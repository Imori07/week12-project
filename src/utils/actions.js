'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
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

  revalidatePath(`/user-profile/${username}`);
  redirect(`/user-profile/${username}`);
};
