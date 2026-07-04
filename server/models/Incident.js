const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  severity: {
    type: String,
    enum: ["Low", "Medium", "High", "Critical"],
    default: "Low",
  },

  status: {
    type: String,
    enum: ["Open", "Investigating", "Resolved"],
    default: "Open",
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Incident", incidentSchema);