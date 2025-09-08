import React from 'react';

export default function JobCard({ job }) {
  // 🔹 Function to handle Apply button click
  function handleApply() {
    alert(`Applied Successfully for ${job.title}`);
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-green-600 font-semibold">{job.salary || 'Not disclosed'}</div>
          <div className="text-xs text-gray-400">per month</div>
        </div>
      </div>

      <p className="mt-3 text-gray-600 text-sm line-clamp-3">{job.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block bg-indigo-50 text-indigo-700 px-2 py-1 text-xs rounded">Full-time</span>
          <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">{job.company}</span>
        </div>

        <div className="flex items-center gap-3">
          {/* 🔹 Apply button with alert */}
          <button
            onClick={handleApply}
            className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md text-sm shadow hover:opacity-95"
          >
            Apply
          </button>

          <button className="px-3 py-1.5 border rounded-md text-sm text-gray-700 hover:bg-gray-50">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
