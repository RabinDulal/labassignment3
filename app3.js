const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// Root route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Items API</h1>");
});

// Load JSON data
let data = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));

// Read all items
app.get("/items", (req, res) => {
  res.json(data);
});

// Create (POST) - Add a new item
app.post("/items", (req, res) => {
  const newItem = req.body;
  
  // Log the request body to help troubleshoot
  console.log("Received item:", newItem);

  // Validate that the required fields are present
  if (!newItem || !newItem.id || !newItem.name) {
    return res.status(400).json({ message: "Invalid data. 'id' and 'name' are required." });
  }

  // Add the new item to the data array
  data.push(newItem);

  // Save the updated data back to the JSON file (optional)
  fs.writeFileSync("./data/data.json", JSON.stringify(data, null, 2), "utf8");

  // Send a success response
  res.status(201).json({ message: "Item added", data });
});

// Update (PUT) - Update an item by ID
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;

  // Find and update the item
  data = data.map(item => (item.id === id ? { ...item, ...updatedItem } : item));

  // Save the updated data back to the JSON file (optional)
  fs.writeFileSync("./data/data.json", JSON.stringify(data, null, 2), "utf8");

  res.json({ message: "Item updated", data });
});

// Delete (DELETE) - Remove an item by ID
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Remove the item from the data
  data = data.filter(item => item.id !== id);

  // Save the updated data back to the JSON file (optional)
  fs.writeFileSync("./data/data.json", JSON.stringify(data, null, 2), "utf8");

  res.json({ message: "Item deleted", data });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
