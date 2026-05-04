const express = require("express");
const fs = require("fs");


const app = express();
const PORT = 3001;

app.use(express.static("public"));


app.get("/products", (req, res) => {
  try {
    const data = fs.readFileSync("products.json", "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).send("Error reading file");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
