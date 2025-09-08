import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative bg-white rounded-xl p-10 shadow-md mt-8">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900">Find your dream job</h2>
          <p className="mt-4 text-gray-700">Search thousands of jobs from top companies. Create an account and apply in minutes.</p>

          <div className="mt-6 flex gap-3">
            <Link to="/jobs" className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700">Browse Jobs</Link>
            <Link to="/post-job" className="px-6 py-3 border rounded-md text-gray-700 hover:bg-gray-50">Post a Job</Link>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="w-full h-56 bg-gradient-to-br from-indigo-200 to-blue-100 rounded-lg flex items-center justify-center text-blue-800 font-bold">
            <div>
              <div className="text-2xl">🚀</div>
              <div className="mt-2">Launch your career</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
