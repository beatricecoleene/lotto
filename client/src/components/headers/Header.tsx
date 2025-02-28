import { useState } from "react";
import coin from "../../assets/images/coin.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  balance: number;
  onDepositClick: () => void;
  onProfileClick: () => void;
  activePage: 'home' | 'game' | 'history';
}

const Header = ({title, balance, onDepositClick, onProfileClick, activePage}: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (page: 'home' | 'game' | 'history') => {
    navigate(`/${page}`);
    setMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-6 bg-purple-950 relative">
      <div className="hidden md:flex items-center px-10">
        <span className="ml-2 text-2xl font-bold text-fuchsia-500">
          LOTTOMOTO
        </span>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div className="flex-grow flex justify-center">
        <div className="px-6 py-1 text-white text-xl font-bold">{title}</div>
      </div>

      <div className="flex items-center pr-10">
        <div className="flex items-center mr-2 bg-transparent rounded-full px-2 py-1">
          <img src={coin} alt="Coin" className="w-8 h-8" />
          <span className="ml-2 text-white font-semibold text-lg">
            {balance.toFixed(2)}
          </span>
        </div>

        <button
          onClick={onDepositClick}
          className="bg-lime-500 px-4 py-1 rounded-md text-white font-semibold"
        >
          Deposit
        </button>

        <div
          className="ml-10 w-10 h-10 bg-gray-300 rounded-full hidden md:block"
          onClick={onProfileClick}
        ></div>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-purple-950 z-50 md:hidden shadow-lg">
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-purple-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    className="w-8 h-8 text-fuchsia-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12.5v5l4 2.5-1-6.5-3-1z" />
                  </svg>
                  <span className="ml-2 text-xl font-bold text-fuchsia-500">
                    LOTTOMOTO
                  </span>
                </div>
                <button onClick={toggleMenu} className="text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 flex-grow">
              <nav className="space-y-4">
                <div className="py-3 flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <span className="ml-3 text-white">Profile</span>
                </div>
                <div className="py-2 text-white border-t border-purple-800 flex flex-col gap-4 mt-4">
                  <button
                    onClick={() => handleNavigation("home")}
                    className={`py-4 text-center font-bold border-2 bg-gray-900 ${
                      activePage === "home"
                        ? "bg-purple-900 text-cyan-400"
                        : "text-cyan-400 hover:bg-purple-900"
                    }`}
                  >
                    HOME
                  </button>

                  <button
                    onClick={() => handleNavigation("game")}
                    className={`py-4 text-center font-bold border-2 bg-gray-900 ${
                      activePage === "game"
                        ? "bg-purple-900 text-fuchsia-500"
                        : "text-fuchsia-500 hover:bg-purple-900"
                    }`}
                  >
                    GAME
                  </button>

                  <button
                    onClick={() => handleNavigation("history")}
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
            </div>

            <div className="p-4 border-t border-purple-800">
              <button className="w-full bg-red-500 px-4 py-2 rounded-md text-white font-semibold">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;