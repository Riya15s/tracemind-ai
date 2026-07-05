import { useEffect, useState } from "react";
import api from "../services/api";

const AIAnalysisModal = ({ incident, onClose }) => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalysis();
  }, []);

  const fetchAnalysis = async () => {
    try {
      setLoading(true);

      const res = await api.get(
        `/incidents/${incident._id}/analyze`
      );

      setAnalysis(res.data.analysis);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-slate-800 w-[650px] rounded-xl p-8">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold text-cyan-400">
            🤖 AI Incident Analysis
          </h2>

          <button
            onClick={onClose}
            className="text-3xl hover:text-red-500"
          >
            ×
          </button>

        </div>

        {loading ? (

          <div className="text-center py-16">

            <div className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

            <p className="mt-5">
              AI is analyzing...
            </p>

          </div>

        ) : (

          <div className="space-y-6 mt-8">

            <div>
              <h3 className="font-bold text-yellow-400">
                Incident
              </h3>

              <p>{incident.title}</p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-400">
                Root Cause
              </h3>

              <p>{analysis.cause}</p>
            </div>

            <div>
              <h3 className="font-bold text-red-400">
                Impact
              </h3>

              <p>{analysis.impact}</p>
            </div>

            <div>
              <h3 className="font-bold text-green-400">
                Recommendation
              </h3>

              <p>{analysis.recommendation}</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-400">
                Confidence
              </h3>

              <p>{analysis.confidence}</p>
            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default AIAnalysisModal;