const express = require("express");
const cors = require("cors");
const route = require("./Router/allRoute");

const app = express();
app.use(express.json());
app.use(cors());

app.use(route);

app.listen("5000", () => {
  console.log("server running on port 5000");
});
