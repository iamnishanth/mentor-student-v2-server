const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const { fetchData } = require("./utils/networkHandler");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  let result = await fetchData();
  res.json(result);
});

app.get("/fetch-all", async (req, res) => {
  let result = await fetchData();
  res.json(result);
});

app.post("/add-student", (req, res) => routes.addStudent(req, res));

app.post("/add-mentor", (req, res) => routes.addMentor(req, res));

app.post("/assign-mentor", (req, res) => routes.assignMentor(req, res));

app.post("/change-mentor", (req, res) => routes.changeMentor(req, res));

app.listen(PORT, (err) => {
  if (!err) {
    console.log("Server started running on", PORT);
  }
});
