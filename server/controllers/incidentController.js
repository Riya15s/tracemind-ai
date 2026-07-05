const Incident = require("../models/Incident");

// =======================
// Create Incident
// =======================
const createIncident = async (req, res) => {
  try {
    const incident = await Incident.create(req.body);

    res.status(201).json({
      success: true,
      message: "Incident Created Successfully",
      data: incident,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Get All Incidents
// =======================
const getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find();

    res.status(200).json({
      success: true,
      count: incidents.length,
      data: incidents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Get Incident By ID
// =======================
const getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);

    if (!incident) {
      return res.status(404).json({
        success: false,
        message: "Incident not found",
      });
    }

    res.status(200).json({
      success: true,
      data: incident,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Update Incident
// =======================
const updateIncident = async (req, res) => {
  try {
    const incident = await Incident.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!incident) {
      return res.status(404).json({
        success: false,
        message: "Incident not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Incident Updated Successfully",
      data: incident,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Delete Incident
// =======================
const deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);

    if (!incident) {
      return res.status(404).json({
        success: false,
        message: "Incident not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Incident Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// AI Analyze Incident
// =======================
const analyzeIncident = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);

    if (!incident) {
      return res.status(404).json({
        success: false,
        message: "Incident not found",
      });
    }

    let analysis = {};

    switch (incident.severity) {
      case "Critical":
        analysis = {
          cause: "Possible database or server outage.",
          impact: "High impact affecting most users.",
          recommendation:
            "Restart backend service, verify MongoDB connection, inspect server logs.",
          confidence: "97%",
        };
        break;

      case "High":
        analysis = {
          cause: "High CPU or memory utilization.",
          impact: "Application performance degradation.",
          recommendation:
            "Check CPU usage, optimize services, and inspect running processes.",
          confidence: "91%",
        };
        break;

      case "Medium":
        analysis = {
          cause: "Configuration or application issue.",
          impact: "Some application features may not work correctly.",
          recommendation:
            "Review application configuration and server logs.",
          confidence: "86%",
        };
        break;

      default:
        analysis = {
          cause: "Minor operational issue.",
          impact: "Minimal impact on users.",
          recommendation:
            "Continue monitoring and perform routine maintenance.",
          confidence: "80%",
        };
    }

    res.status(200).json({
      success: true,
      incident,
      analysis,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Export Controllers
// =======================
module.exports = {
  createIncident,
  getAllIncidents,
  getIncidentById,
  updateIncident,
  deleteIncident,
  analyzeIncident,
};