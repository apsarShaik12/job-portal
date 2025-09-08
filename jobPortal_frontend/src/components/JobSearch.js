import React, { useState } from 'react';

export default function JobSearch({ onSearch }) {
  const [val, setVal] = useState('');

  const submit = (e) => {
    e && e.preventDefault();
    onSearch(val.trim());
  };

  return (
    <form onSubmit={submit} className="flex w-full md:w-80">
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Search by title or company..."
        className="flex-1 px-4 py-2 border border-gray-200 rounded-l-md focus:outline-none"
      />
      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">Search</button>
    </form>
  );
}
