import { db } from './dbConnection';

export const fetchUser = async (username) => {
  const user = await db.query(
    `SELECT * FROM users WHERE clerk_id = (SELECT clerk_id FROM users WHERE username = $1)`,
    [username]
  );
  return user.rows[0];
};
