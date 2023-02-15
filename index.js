const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 8000;
const apiData = require("./data.json");
app.get("/", (req, res) => {
  res.send("Hello I'm Live");
});
app.get("/service", (req, res) => {
  res.send(apiData);
});
app.listen(port, () => {
  console.log("I am Live again");
});
