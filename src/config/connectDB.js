import mysql from 'mysql'
import { config } from "dotenv";

config();

const con = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USERNAME || "root",
  password: process.env.DATABASE_PASSWORD || "Tho2003@",
  database: process.env.DATABASE_NAME || "oh-my-clean",
});

con.connect((err) => {
  if(err) throw err
  console.log("Connected!")
})

export default con