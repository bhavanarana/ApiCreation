const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;
const apiData = require("./data.json");
app.get("/", (req, res) => {
  res.send("Hello I'm Live");
});
// app.get("/service", (req, res) => {
//   res.send(apiData);
// });
app
  .route("/interns")
  .get((req, res) => {
    res.json(apiData);
  })
  .post((req, res) => {
    if (!req.body.name) {
      res.status(400);
      return res.json({ error: "email is required..." });
    }
    let user = {
      id: apiData.length + 1,
      name: req.body.name,
      position: req.body.position,
    };
    apiData.push(user);
    res.json(user);
  });
app.put("/interns/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  let id = req.params.id;
  let first_name = req.body.name;
  let position = req.body.position;
  let index = apiData.findIndex((data) => {
    return data.id == Number.parseInt(id);
  });
  if (index >= 0) {
    let data = apiData[index];
    data.name = first_name;
    data.position = position;
    res.json(data);
  } else {
    res.status(404);
  }
});
app.delete("/interns/:id", (req, res) => {
  let id = req.params.id;
  let index = apiData.findIndex((data) => {
    return data.id == Number.parseInt(id);
  });
  if (index >= 0) {
    apiData.splice(index, 1);
    res.json(apiData[index]);
  } else {
    res.status(404);
    res.end();
  }
});
app.get("/interns/user", (req, res) => {
  let id = req.query.id;
  // console.log(id);
  let index = apiData.findIndex((data) => {
    console.log(data.id);
    console.log(id);
    return data.id == id;
  });
  if (index >= 0) {
    let data = apiData[index];
    res.send(data);
  } else {
    res.status(404);
    res.end();
  }
});

app.listen(port, () => {
  console.log("I am Live again");
});
