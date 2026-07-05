
const FilterBar = ({
  statusFilter,
  setStatusFilter,
  severityFilter,
  setSeverityFilter,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-6">

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="bg-slate-800 p-3 rounded-xl flex-1"
      >
        <option value="All">All Status</option>
        <option value="Open">Open</option>
        <option value="Investigating">Investigating</option>
        <option value="Resolved">Resolved</option>
      </select>

      <select
        value={severityFilter}
        onChange={(e) => setSeverityFilter(e.target.value)}
        className="bg-slate-800 p-3 rounded-xl flex-1"
      >
        <option value="All">All Severity</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>

    </div>
  );
};

export default FilterBar;