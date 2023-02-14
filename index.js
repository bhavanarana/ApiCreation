const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("Hello I'm Live");
});
app.listen(port, () => {
  console.log("I am Live again");
});
