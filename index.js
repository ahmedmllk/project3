const app = require("express")();
const cors = require('cors')
const express = require('express')
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Routes = require("./Routes/routes");
const port = 3000;
require("dotenv").config();
mongoose
  .connect(process.env.URL_DB)
  .then(() => {
    console.log("connected to DB succesfully");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err)
    throw err;
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.use(
  session({
    secret: "1234567890",
    resave: true,
    saveUninitialized: true,
  })
);
app.use("/auth", Routes);
