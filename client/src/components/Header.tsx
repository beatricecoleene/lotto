import { useState } from "react";
import coin from "../assets/images/coin.png";

interface HeaderProps {
  title: string;
  balance: number;
  onDepositClick: () => void;
  onProfileClick: () => void;
}

const Header = ({ title, balance, onDepositClick, onProfileClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-6 bg-purple-950">
      <div className="hidden md:flex items-center">
        {/* <svg
          className="w-10 h-10 text-fuchsia-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12.5v5l4 2.5-1-6.5-3-1z" />
        </svg> */}
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


        <div className="flex items-center">
            <div className="flex items-center mr-2 bg-transparent rounded-full px-2 py-1">
                <img src={coin} alt="Coin" className="w-8 h-8" />

                <span className="ml-2 text-white font-semibold text-lg">
                    {balance.toFixed(2)}
                </span>
            </div>

            <button
                onClick={onDepositClick}
                className="bg-lime-500 px-4 py-1 rounded-md text-white font-semibold">
                Deposit
            </button>
            
            <div className="ml-15 w-10 h-10 bg-gray-300 rounded-full hidden md:block" onClick={onProfileClick}></div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-purple-950 z-50 md:hidden">
          <div className="px-4 py-2 border-t border-purple-800">
            <div className="flex items-center py-3">
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
            <div className="py-3 flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <span className="ml-3 text-white">Profile</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
