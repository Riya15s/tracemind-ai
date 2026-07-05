import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import IncidentList from "../components/IncidentList";
import IncidentForm from "../components/IncidentForm";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import AIAnalysisModal from "../components/AIAnalysisModal";
import Footer from "../components/Footer";
import api from "../services/api";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [editIncident, setEditIncident] = useState(null);
  const [selectedIncident, setSelectedIncident] = useState(null);

  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [severityFilter, setSeverityFilter] = useState("All");

  // Fetch Incidents
  const fetchIncidents = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/incidents");

      setIncidents(res.data.data);
    } catch (error) {
      console.log(error);
      setError("Unable to load incidents. Please check your server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncidents();
  }, [refresh]);

  // Refresh List
  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  // Edit
  const handleEdit = (incident) => {
    setEditIncident(incident);
    setShowForm(true);
  };

  // AI Analyze
  const handleAnalyze = (incident) => {
    setSelectedIncident(incident);
  };

  // Close Form
  const handleClose = () => {
    setShowForm(false);
    setEditIncident(null);
  };

  // Search + Filter
  const filteredIncidents = incidents.filter((incident) => {
    const matchesSearch =
      incident.title.toLowerCase().includes(search.toLowerCase()) ||
      incident.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      incident.status === statusFilter;

    const matchesSeverity =
      severityFilter === "All" ||
      incident.severity === severityFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesSeverity
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      <Navbar
        onOpen={() => {
          setEditIncident(null);
          setShowForm(true);
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            TraceMind AI Dashboard
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Monitor, manage and analyze incidents with AI-powered insights.
          </p>

        </div>

        {/* Search */}

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Filters */}

        <FilterBar
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          severityFilter={severityFilter}
          setSeverityFilter={setSeverityFilter}
        />

        {/* Error */}

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 rounded-lg p-4 my-6">
            {error}
          </div>
        )}

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">

          <StatsCard
            title="Total"
            value={filteredIncidents.length}
            color="text-cyan-400"
          />

          <StatsCard
            title="Open"
            value={
              filteredIncidents.filter(
                (item) => item.status === "Open"
              ).length
            }
            color="text-red-400"
          />

          <StatsCard
            title="Investigating"
            value={
              filteredIncidents.filter(
                (item) => item.status === "Investigating"
              ).length
            }
            color="text-yellow-400"
          />

          <StatsCard
            title="Resolved"
            value={
              filteredIncidents.filter(
                (item) => item.status === "Resolved"
              ).length
            }
            color="text-green-400"
          />

        </div>

        {/* Loading */}

        {loading ? (
          <div className="flex justify-center items-center h-72">

            <div className="text-center">

              <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

              <p className="mt-5 text-lg text-gray-300">
                Loading incidents...
              </p>

            </div>

          </div>
        ) : (
          <IncidentList
            incidents={filteredIncidents}
            onEdit={handleEdit}
            onAnalyze={handleAnalyze}
            fetchIncidents={handleRefresh}
          />
        )}

      </div>

      <Footer />

      {showForm && (
        <IncidentForm
          onClose={handleClose}
          fetchIncidents={handleRefresh}
          editIncident={editIncident}
        />
      )}

      {selectedIncident && (
        <AIAnalysisModal
          incident={selectedIncident}
          onClose={() => setSelectedIncident(null)}
        />
      )}

    </div>
  );
};

export default Dashboard;
