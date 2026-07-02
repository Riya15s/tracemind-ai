
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const incidentRoutes = require("./routes/incidentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Test Route
app.get("/", (req, res) => {
  res.send(" Welcome to TraceMind AI Backend");
});

app.use("/api/incidents", incidentRoutes);

module.exports = app;