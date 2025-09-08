import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-500 shadow-md text-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
            JP
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">JobPortal</h1>
            <p className="text-xs text-gray-500 -mt-1">Find your next opportunity</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-yellow-300">Home</Link>

          <Link to="/jobs" className="text-white hover:text-yellow-300">Jobs</Link>
          <Link to="/post-job" className="text-white hover:text-yellow-300">Post Job</Link>
        </nav>

        <div className="flex items-center space-x-3">
<Link to="/login" className="px-4 py-2 border border-white rounded-md text-sm font-medium hover:bg-white hover:text-blue-600">Login</Link>
<Link to="/register" className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-md text-sm font-medium hover:bg-yellow-500">Register</Link>


        </div>
      </div>
    </header>
  );
}
