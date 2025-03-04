import { db } from './dbConnection';

export const fetchUser = async (username) => {
  const user = await db.query(`SELECT * FROM users WHERE username = $1`, [
    username,
  ]);
  return user.rows[0];
};

export const fetchUserByClerkId = async (clerkId) => {
  const user = await db.query(
    `SELECT username FROM users WHERE clerk_id = $1`,
    [clerkId]
  );
  return user.rows[0];
};
