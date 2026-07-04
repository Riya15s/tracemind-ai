const express = require("express");

const {
  createIncident,
  getAllIncidents,
  getIncidentById,
  updateIncident,
  deleteIncident,
} = require("../controllers/incidentController");

const router = express.Router();

router.get("/", getAllIncidents);

router.get("/:id", getIncidentById);

router.post("/", createIncident);

router.put("/:id", updateIncident);

router.delete("/:id", deleteIncident);

module.exports = router;