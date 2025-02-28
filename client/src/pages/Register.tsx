import { useState,ChangeEvent, FormEvent  } from "react";
import Header from "../components/headers/Headerout";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-[#1E1633] text-white flex flex-col">
            <header className="py-4 px-6 flex justify-between items-center border-b border-[#FF00FF]/30">
        <div className="flex items-center">
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
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-md">

          {/* Title with glowing effect */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold tracking-wider text-[#FF00FF] drop-shadow-[0_0_8px_rgba(255,0,255,0.7)]">
              CREATE YOUR ACCOUNT
            </h2>
          </div>
          
          {/* Form with neon outlines */}
          <div className="bg-[#2A1F45] rounded-lg shadow-lg shadow-[#FF00FF]/20 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#FF99FF] mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-[#2A1F45] py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-[#FF00FF] placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF00FF] focus:outline-none"
                />
              </div>
              
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#FF99FF] mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-[#2A1F45] py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-[#FF00FF] placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF00FF] focus:outline-none"
                />
              </div>
              
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#FF99FF] mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-[#2A1F45] py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-[#FF00FF] placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF00FF] focus:outline-none"
                />
              </div>
              
              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-[#FF99FF] mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-[#2A1F45] py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-[#FF00FF] placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF00FF] focus:outline-none"
                />
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <a
                  href="/login"
                  className="text-sm text-[#FF99FF] hover:text-[#FF00FF] transition-colors duration-300"
                >
                  Already registered?
                </a>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-md font-semibold bg-[#FF00FF] hover:bg-[#FF33FF] text-white transition-all duration-300 shadow-[0_0_10px_rgba(255,0,255,0.5)]"
                >
                  REGISTER
                </button>
              </div>
            </form>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Register;