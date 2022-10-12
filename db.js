const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gia_vang",
});
connection.connect((err) => {
  if (err) throw err;
});
module.exports = connection;
