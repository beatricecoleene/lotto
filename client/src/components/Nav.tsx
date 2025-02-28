import { useNavigate } from "react-router-dom";

interface SideNavProps {
  activePage: "home" | "game" | "history";
}

const SideNav = ({ activePage }: SideNavProps) => {
  const navigate = useNavigate();

  return (
    <nav className="border-r border-purple-900 bg-purple-950 h-screen w-64 hidden md:block">
      <div className="flex flex-col gap-4 pt-8 mt-35">
        <button
          onClick={() => navigate("/home")}
          className={`py-4 text-center font-bold border-2 bg-gray-900 ${
            activePage === "home"
              ? "bg-purple-900 text-cyan-400"
              : "text-cyan-400 hover:bg-purple-900"
          }`}
        >
          HOME
        </button>

        <button
          onClick={() => navigate("/game")}
          className={`py-4 text-center font-bold border-2 bg-gray-900 ${
            activePage === "game"
              ? "bg-purple-900 text-fuchsia-500"
              : "text-fuchsia-500 hover:bg-purple-900"
          }`}
        >
          GAME
        </button>

        <button
          onClick={() => navigate("/history")}
          className={`py-4 text-center font-bold border-2 bg-gray-900 ${
            activePage === "history"
              ? "bg-purple-900 text-red-500"
              : "text-red-500 hover:bg-purple-900"
          }`}
        >
          HISTORY
        </button>
      </div>
    </nav>
  );
};

export default SideNav;