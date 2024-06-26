import mysql from "mysql2/promise";
import "dotenv/config";

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

const testConnection = async () => {
  try {
    await db.getConnection();
    console.log("Connection Successful");
  } catch (error) {
    console.log(error);
  }
};

export { db, testConnection };