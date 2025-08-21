const express = require("express");
const path = require("path");
const app = express();

// serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// run server on port 3000
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});