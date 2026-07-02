const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Incident API Working",
    data: [
      {
        id: 1,
        title: "Database Connection Failed",
        severity: "Critical",
        status: "Open",
      },
      {
        id: 2,
        title: "High CPU Usage",
        severity: "Medium",
        status: "Resolved",
      },
    ],
  });
});

module.exports = router;