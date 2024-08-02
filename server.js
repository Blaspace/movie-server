import express from "express"
import cors from "cors"
import route from "./Router/allRoute.js"

const app = express();
app.use(express.json());
app.use(cors());

app.use(route);

app.listen("5000", () => {
  console.log("server running on port 5000");
});
