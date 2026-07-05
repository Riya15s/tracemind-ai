import {
  FaChartBar,
  FaExclamationCircle,
  FaSearch,
  FaCheckCircle,
} from "react-icons/fa";

const StatsCard = ({ title, value, color }) => {
  const getIcon = () => {
    switch (title) {
      case "Total":
        return <FaChartBar className="text-4xl text-cyan-400" />;

      case "Open":
        return <FaExclamationCircle className="text-4xl text-red-400" />;

      case "Investigating":
        return <FaSearch className="text-4xl text-yellow-400" />;

      case "Resolved":
        return <FaCheckCircle className="text-4xl text-green-400" />;

      default:
        return <FaChartBar className="text-4xl text-cyan-400" />;
    }
  };

  return (
    <div
      className="
      bg-slate-800
      rounded-xl
      p-6
      shadow-lg
      hover:shadow-cyan-500/30
      hover:-translate-y-2
      transition-all
      duration-300"
    >
      <div className="flex justify-between items-center">

        <div>
          <h3 className="text-gray-400 text-lg">
            {title}
          </h3>

          <h1 className={`text-4xl font-bold mt-3 ${color}`}>
            {value}
          </h1>
        </div>

        {getIcon()}

      </div>
    </div>
  );
};

export default StatsCard;