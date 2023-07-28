import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "anderson1234",
    database: "crud"
})