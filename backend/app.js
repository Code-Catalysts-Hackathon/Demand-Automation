const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { demands, businessUnits } = require("./content");
const app = express();

const getJWT = () => {
  const payload = {
    id: 123456,
    firstName: "john",
    lastName: "doe",
    role: "LTCADMIN",
    businessUnit:{
        id:1,
        name:"CL"
    },
    platform:{
        id:2,
        name:"Homes"
    }
};
  const secret = "your_secret_key";
  const expiresIn = "1h";
  const token = jwt.sign(payload, secret, { expiresIn });
  return token;
};

app.use(bodyParser.json());

app.use("*", cors());
app.post("/api/auth/login", (req, res) => {
  console.log(req);
  res.json({
    token: getJWT(),
  });
});

app.post("/api/demands", (req, res) => {
  console.log(req);
  res.json({
    list: demands,
    totalEntries: 20,
  });
});

app.get("/api/demands/:id", (req, res) => {
  console.log(req);
  res.json({
    ...demands[0]
  });
});

app.put("/api/demands/:id", (req, res) => {
  console.log(req);
  res.json({
    id:req.params.id
  });
});

app.get("/api/businessUnits", (req, res) => {
  console.log(req);
  res.json({
    list: businessUnits,
  });
});

app.post("/api/create-demand", (req, res) => {
  console.log(req);
  res.json({
    id:123
  });
});



app.listen(8080);
