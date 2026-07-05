import { useState, useEffect } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

const IncidentForm = ({
  onClose,
  fetchIncidents,
  editIncident,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    severity: "Low",
    status: "Open",
  });

  useEffect(() => {
    if (editIncident) {
      setFormData({
        title: editIncident.title,
        description: editIncident.description,
        severity: editIncident.severity,
        status: editIncident.status,
      });
    }
  }, [editIncident]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editIncident) {
        await api.put(`/incidents/${editIncident._id}`, formData);

        toast.success("Incident Updated Successfully");
      } else {
        await api.post("/incidents", formData);

        toast.success("Incident Created Successfully");
      }

      fetchIncidents();
      onClose();
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-slate-800 w-[500px] rounded-xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          {editIncident ? "Edit Incident" : "Create Incident"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Incident Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700"
            rows="4"
            required
          />

          <select
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700"
          >
            <option>Open</option>
            <option>Investigating</option>
            <option>Resolved</option>
          </select>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded"
            >
              {editIncident ? "Update" : "Create"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default IncidentForm;