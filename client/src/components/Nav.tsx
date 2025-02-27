interface SideNavProps {
  activePage: "home" | "game" | "history";
  // onNavigate: (page: "home" | "game" | "history") => void;
}

import { useNavigate } from "react-router-dom";

const SideNav = ({ activePage }: SideNavProps) => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="border-r border-purple-900 flex flex-col gap-4 pt-50 bg-purple-950 w-1/6 h-screen hidden md:flex">
        <button
          onClick={() => navigate("/home")}
          className={`py-4 text-center font-bold border-2 ${
            activePage === "home"
              ? "bg-purple-900 text-cyan-400"
              : "text-cyan-400 hover:bg-purple-900"
          }`}
        >
          HOME
        </button>

        <button
          onClick={() => navigate("/game")}
          className={`py-4 text-center font-bold border-2 ${
            activePage === "game"
              ? "bg-purple-900 text-fuchsia-500"
              : "text-fuchsia-500 hover:bg-purple-900"
          }`}
        >
          GAME
        </button>

        <button
          onClick={() => navigate("/history")}
          className={`py-4 text-center font-bold border-2 ${
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
