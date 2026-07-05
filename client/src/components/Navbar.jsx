import { FaRobot } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";

const Navbar = ({ onOpen }) => {
  return (
    <nav className="bg-slate-800 shadow-lg px-8 py-4 flex justify-between items-center">

      <div className="flex items-center gap-3">

        <FaRobot className="text-4xl text-cyan-400" />

        <div>
          <h1 className="text-2xl font-bold text-cyan-400">
            TraceMind AI
          </h1>

          <p className="text-gray-400 text-sm">
            AI Incident Analysis Dashboard
          </p>
        </div>

      </div>

      <button
        onClick={onOpen}
        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold transition duration-300 hover:scale-105"
      >
        <IoAddCircle size={22} />
        New Incident
      </button>

    </nav>
  );
};

export default Navbar;