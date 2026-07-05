import api from "../services/api";
import toast from "react-hot-toast";
import {
  FaEdit,
  FaTrash,
  FaRobot,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const IncidentList = ({
  incidents,
  onEdit,
  onAnalyze,
  fetchIncidents,
}) => {

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this incident?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/incidents/${id}`);

      toast.success("Incident Deleted Successfully");

      fetchIncidents();

    } catch (error) {
      console.log(error);

      toast.error("Delete Failed");
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Low":
        return "bg-green-500";
      case "Medium":
        return "bg-yellow-500";
      case "High":
        return "bg-orange-500";
      case "Critical":
        return "bg-red-600";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-500";
      case "Investigating":
        return "bg-yellow-500";
      case "Resolved":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        All Incidents
      </h2>

      {incidents.length === 0 ? (
        <div className="bg-slate-800 rounded-xl p-10 text-center">

          <div className="text-6xl mb-4">
            📂
          </div>

          <h3 className="text-2xl font-bold">
            No Incidents Found
          </h3>

          <p className="text-gray-400 mt-3">
            Try changing the search or filters.
          </p>

        </div>
      ) : (
        <div className="space-y-6">

          {incidents.map((incident) => (

            <div
              key={incident._id}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
            >

              <h3 className="text-2xl font-bold text-cyan-400">
                {incident.title}
              </h3>

              <p className="text-gray-300 mt-3 leading-relaxed">
                {incident.description}
              </p>

              <div className="flex flex-col md:flex-row md:gap-6 mt-4 text-gray-400 text-sm">

                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>
                    Created:{" "}
                    {new Date(incident.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <FaClock />
                  <span>
                    Updated:{" "}
                    {new Date(incident.updatedAt).toLocaleDateString()}
                  </span>
                </div>

              </div>

              <div className="flex flex-wrap gap-3 mt-5">

                <span
                  className={`${getSeverityColor(
                    incident.severity
                  )} px-4 py-1 rounded-full text-white font-semibold`}
                >
                  {incident.severity}
                </span>

                <span
                  className={`${getStatusColor(
                    incident.status
                  )} px-4 py-1 rounded-full text-white font-semibold`}
                >
                  {incident.status}
                </span>

              </div>

              <div className="flex flex-wrap gap-3 mt-6">

                <button
                  onClick={() => onEdit(incident)}
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg font-semibold transition"
                >
                  <FaEdit />
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(incident._id)}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-semibold transition"
                >
                  <FaTrash />
                  Delete
                </button>

                <button
                  onClick={() => onAnalyze(incident)}
                  className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-lg font-semibold transition"
                >
                  <FaRobot />
                  Analyze
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default IncidentList;