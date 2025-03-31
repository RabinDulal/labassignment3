const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Root route to display a welcome message
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Items API</h1><p>Access items at <a href='/items'>/items</a></p>");
});

// Route to display JSON data
app.get("/items", (req, res) => {
  const filePath = path.join(__dirname, "data", "data.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading data file:", err);
      res.status(500).send("Error reading data file");
      return;
    }
    try {
      const items = JSON.parse(data);
      res.json(items);
    } catch (parseErr) {
      console.error("Error parsing JSON data:", parseErr);
      res.status(500).send("Error parsing JSON data");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
