const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

const port = 8000;

const app = express();
app.use(cors());
app.use(require("./routes"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = app.listen(port, function () {
  console.log("Server listening on port " + server.address().port);
});

module.exports = app;
