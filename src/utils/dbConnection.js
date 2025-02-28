import pg from "pg";

const dbConnection = new pg.Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
});

export default dbConnection;
