const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { demands, businessUnits, platforms, labs, featureTeams, skills, employees } = require("./content");
const app = express();

const userObj = {
  "5555555":"LBGADMIN",
  "3333333":"BUHEAD",
  "2222222":"BUHEAD",
  "6666666":"BUPLATFORMHEAD",
}

const getJWT = (role) => {
  const payload = {
    id: 123456,
    firstName: "john",
    lastName: "doe",
    role:role || 'LTCADMIN',
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
    token: getJWT(role[req.body.userName]),
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


app.get("/api/platforms", (req, res) => {
  console.log(req);
  res.json({
    list: platforms,
  });
});

app.get("/api/labs", (req, res) => {
  console.log(req);
  res.json({
    list: labs,
  });
});

app.get("/api/featureTeams", (req, res) => {
  console.log(req);
  res.json({
    list: featureTeams,
  });
});

app.get("/api/skills", (req, res) => {
  console.log(req);
  res.json({
    list: skills,
  });
});

app.get("/api/employee", (req, res) => {
  console.log(req);
  res.json({
    list: employees,
  });
});

app.post("/api/create-demand", (req, res) => {
  console.log(req);
  res.json({
    id:123
  });
});



app.listen(8080);
