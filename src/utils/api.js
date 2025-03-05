import { db } from "./dbConnection";

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
//comments section
export const fetchUserComments = async (username) => {
  const result = await db.query(
    ` SELECT r.id, r.comment, r.created_at, b.business_name
    FROM reviews r
    JOIN business b ON r.business_id = b.id
    WHERE r.user_id = (SELECT id FROM users WHERE username = $1)
    ORDER BY created_at DESC;
  `,
    [username]
  );

  return result.rows;
};
