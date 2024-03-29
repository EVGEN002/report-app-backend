const express = require("express");
const router = require("./app/routes");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log("API is listening on port " + PORT);
});
