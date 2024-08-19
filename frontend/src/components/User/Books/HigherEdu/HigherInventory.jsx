import { useNavigate } from "react-router-dom";

export default function HigherInventory() {
  const navigate = useNavigate();

  const singleClassHandler = (categorise, classId) => {
    navigate(`/lms/${categorise}/class/${classId}`);
  };

  return (
    <div className="flex flex-col items-center py-8 w-full">
      <h1 className="text-3xl font-bold mb-6 text-white">Select Class</h1>
      <div className="px-2 mt-2 flex flex-wrap justify-center">
        <SchoolNavigation
          onClick={() => singleClassHandler("higher", "mbbs")}
          label="MBBS"
        />
        <SchoolNavigation
          onClick={() => singleClassHandler("higher", "aiml")}
          label="AiMl"
        />
        <SchoolNavigation
          onClick={() => singleClassHandler("higher", "BE")}
          label="BE"
        />
        <SchoolNavigation
          onClick={() => singleClassHandler("higher", "bscit")}
          label="BSC-It"
        />
      </div>
    </div>
  );
}

const SchoolNavigation = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 m-1 px-2 bg-slate-300 bg-opacity-50 rounded-lg border-2 border-slate-300 hover:border-red-400 transition-all"
    >
      {label}
    </button>
  );
};
