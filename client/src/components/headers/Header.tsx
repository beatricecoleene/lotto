import { useState } from "react";
import coin from "../../assets/images/coin.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  balance: number;
  // onDepositClick: () => void;
  onProfileClick: () => void;
  activePage: 'home' | 'game' | 'history' | 'profile' | 'shop';
}

const Header = ({title, balance, onProfileClick, activePage}: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (page: 'home' | 'game' | 'history' | 'profile' | 'shop') => {
    navigate(`/${page}`);
    setMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-4 bg-[#1E1633] border-b border-[#FF00FF]/30 relative">
      <div className="hidden md:flex items-center">
        <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#FF00FF" strokeWidth="2" />
          <circle cx="8" cy="9" r="2" fill="#FF00FF" />
          <circle cx="16" cy="9" r="2" fill="#FF00FF" />
          <path d="M8 16L16 16" stroke="#FF00FF" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="ml-1 text-2xl font-bold text-[#FF00FF]">
          LOTTOMOTO
        </span>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-[#FF99FF] focus:outline-none hover:text-[#FF00FF]">
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

      {/* Title */}
      <div className="flex-grow flex justify-center">
        <div className="px-6 py-1 text-[#FF99FF] text-xl font-bold">{title}</div>
      </div>

      {/* Balance and deposit */}
      <div className="flex items-center">
        <div className="flex items-center mr-3 bg-[#2A1F45] rounded-full px-3 py-1 border border-[#FF00FF]/50">
          <img src={coin} alt="Coin" className="w-6 h-6" />
          <span className="ml-2 text-white font-semibold">
            {balance.toFixed(2)}
          </span>
        </div>

        <button
          onClick={() => handleNavigation("shop")}
          className="bg-[#FF00FF] hover:bg-[#FF33FF] px-4 py-1 rounded-md text-white font-semibold 
             transition-all duration-300 ease-in-out 
             shadow-[0_0_8px_rgba(255,0,255,0.5)] hover:shadow-[0_0_12px_rgba(255,51,255,0.7)] 
             transform hover:scale-105 cursor-pointer"
        >
          Deposit
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMenu}>
          <div 
            className="fixed top-0 left-0 w-64 h-full bg-[#1E1633] z-50 shadow-lg overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Menu header */}
              <div className="p-4 border-b border-[#FF00FF]/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#FF00FF" strokeWidth="2" />
                      <circle cx="8" cy="9" r="2" fill="#FF00FF" />
                      <circle cx="16" cy="9" r="2" fill="#FF00FF" />
                      <path d="M8 16L16 16" stroke="#FF00FF" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="ml-1 text-xl font-bold text-[#FF00FF]">
                      LOTTOMOTO
                    </span>
                  </div>
                  <button onClick={toggleMenu} className="text-[#FF99FF] hover:text-[#FF00FF]">
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

              {/* Menu content */}
              <div className="p-4 flex-grow">
                <nav className="space-y-4">
                  <div 
                    className="py-3 flex items-center cursor-pointer hover:bg-[#2A1F45] px-2 rounded-md transition-colors"
                    onClick={onProfileClick}
                  >
                    <div className="w-10 h-10 bg-[#FF00FF]/30 rounded-full border border-[#FF00FF] flex items-center justify-center text-[#FF00FF]">
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-[#FF99FF]">Profile</span>
                  </div>

                  {/* Navigation buttons */}
                  <div className="py-2 text-white border-t border-[#FF00FF]/30 flex flex-col gap-3 mt-4">
                    <button
                      onClick={() => handleNavigation("home")}
                      className={`py-3 text-center font-bold border border-[#FF00FF]/50 rounded-md ${
                        activePage === "home"
                          ? "bg-[#2A1F45] text-[#FF99FF] shadow-[0_0_8px_rgba(255,0,255,0.5)]"
                          : "text-[#FF99FF] hover:bg-[#2A1F45] transition-colors"
                      }`}
                    >
                      HOME
                    </button>

                    <button
                      onClick={() => handleNavigation("game")}
                      className={`py-3 text-center font-bold border border-[#FF00FF]/50 rounded-md ${
                        activePage === "game"
                          ? "bg-[#2A1F45] text-[#FF00FF] shadow-[0_0_8px_rgba(255,0,255,0.5)]"
                          : "text-[#FF99FF] hover:bg-[#2A1F45] transition-colors"
                      }`}
                    >
                      GAME
                    </button>

                    <button
                      onClick={() => handleNavigation("history")}
                      className={`py-3 text-center font-bold border border-[#FF00FF]/50 rounded-md ${
                        activePage === "history"
                          ? "bg-[#2A1F45] text-[#FF00FF] shadow-[0_0_8px_rgba(255,0,255,0.5)]"
                          : "text-[#FF99FF] hover:bg-[#2A1F45] transition-colors"
                      }`}
                    >
                      HISTORY
                    </button>
                  </div>
                </nav>
              </div>

              {/* Logout button */}
              <div className="p-4 border-t border-[#FF00FF]/30">
                <button className="w-full bg-[#FF00FF] hover:bg-[#FF33FF] px-4 py-2 rounded-md text-white font-semibold transition-colors">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      <div className="hidden md:flex fixed bottom-0 left-0 right-0 justify-center py-4 bg-[#1E1633] border-t border-[#FF00FF]/30 z-10">
        <div className="flex gap-8">
          <button
            onClick={() => handleNavigation("home")}
            className={`px-8 py-2 text-center font-bold rounded-md transition-all ${
              activePage === "home"
                ? "bg-[#2A1F45] text-[#FF99FF] shadow-[0_0_8px_rgba(255,0,255,0.5)]"
                : "text-[#FF99FF] hover:bg-[#2A1F45]/50"
            }`}
          >
            HOME
          </button>

          <button
            onClick={() => handleNavigation("game")}
            className={`px-8 py-2 text-center font-bold rounded-md transition-all ${
              activePage === "game"
                ? "bg-[#2A1F45] text-[#FF00FF] shadow-[0_0_8px_rgba(255,0,255,0.5)]"
                : "text-[#FF99FF] hover:bg-[#2A1F45]/50"
            }`}
          >
            GAME
          </button>

          <button
            onClick={() => handleNavigation("history")}
            className={`px-8 py-2 text-center font-bold rounded-md transition-all ${
              activePage === "history"
                ? "bg-[#2A1F45] text-[#FF00FF] shadow-[0_0_8px_rgba(255,0,255,0.5)]"
                : "text-[#FF99FF] hover:bg-[#2A1F45]/50"
            }`}
          >
            HISTORY
          </button>

          <button
            onClick={() => handleNavigation("profile")}
            className={`px-8 py-2 text-center font-bold rounded-md transition-all ${
              activePage === "profile"
                ? "bg-[#2A1F45] text-[#FF00FF] shadow-[0_0_8px_rgba(255,0,255,0.5)]"
                : "text-[#FF99FF] hover:bg-[#2A1F45]/50"
            }`}
          >
            PROFILE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;