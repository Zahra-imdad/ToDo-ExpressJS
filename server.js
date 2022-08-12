const express = require("express");
const app = express();
const router = express.Router();
const restRoute = require("./api/restRoute");
const path = require("path");

router.get("/todo", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "crud.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", restRoute);

app.use((req, res) => {
  res.status(404).send("PAGE NOT FOUND");
});

app.listen(3000, () => {
  console.log("express running");
});
