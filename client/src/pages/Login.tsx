import { useState } from "react";
import Header from "../components/headers/Headerout";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-[#1E1633] text-white flex flex-col">
      <header className="py-4 px-6 flex justify-between items-center border-b border-[#FF00FF]/30">
        <div className="flex items-center" onClick={() => window.location.href = "/"}>
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#FF00FF" strokeWidth="2" />
            <circle cx="8" cy="9" r="2" fill="#FF00FF" />
            <circle cx="16" cy="9" r="2" fill="#FF00FF" />
            <path d="M8 16L16 16" stroke="#FF00FF" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h1 className="text-2xl font-bold text-[#FF00FF]">LOTTOMOTO</h1>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="/login" 
            className="text-[#FF99FF] hover:text-[#FF00FF] transition-colors px-4 py-2"
          >
            Login
          </a>
          <a 
            href="/register" 
            className="bg-[#FF00FF] hover:bg-[#FF33FF] text-white px-4 py-2 rounded-md shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all"
          >
            Register
          </a>
        </div>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          
          {/* Title with glowing effect */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-wider text-[#FF00FF] drop-shadow-[0_0_8px_rgba(255,0,255,0.7)]">
              LOGIN TO YOUR ACCOUNT
            </h2>
          </div>
          
          {/* Form with neon outlines */}
          <div className="bg-[#2A1F45] rounded-lg shadow-lg shadow-[#FF00FF]/20 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#FF99FF] mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 bg-[#2A1F45] py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-[#FF00FF] placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF00FF] focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#FF99FF] mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 bg-[#2A1F45] py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-[#FF00FF] placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF00FF] focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                onClick={() => (window.location.href = "/home")}
                className="w-full py-3 px-4 rounded-md font-semibold bg-[#FF00FF] hover:bg-[#FF33FF] text-white transition-all duration-300 shadow-[0_0_10px_rgba(255,0,255,0.7)]"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
          
          {/* Registration link with glowing effect */}
          <div className="mt-8 text-center">
            <p className="text-[#FF99FF]">
              Not a player?{" "}
              <a 
                href="/register" 
                className="font-semibold text-[#FF00FF] hover:text-[#FF33FF] transition-colors duration-300 underline"
              >
                Create an account here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;