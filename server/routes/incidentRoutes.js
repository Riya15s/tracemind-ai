const express = require("express");

const {
  createIncident,
  getAllIncidents,
  getIncidentById,
  updateIncident,
  deleteIncident,
  analyzeIncident,
} = require("../controllers/incidentController");

const router = express.Router();

// Get All Incidents
router.get("/", getAllIncidents);

// Get Single Incident
router.get("/:id", getIncidentById);

// Create Incident
router.post("/", createIncident);

// Update Incident
router.put("/:id", updateIncident);

// Delete Incident
router.delete("/:id", deleteIncident);

// AI Analyze Incident
router.get("/:id/analyze", analyzeIncident);

module.exports = router;