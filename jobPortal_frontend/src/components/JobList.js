import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import JobSearch from './JobSearch';
import { fetchJobs } from '../services/api';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [q, setQ] = useState('');

  const loadJobs = (query) => {
    const fetcher = fetchJobs();
    fetcher.then(res => {
      if (query) {
        const filtered = res.data.filter(j =>
          (j.title || '').toLowerCase().includes(query.toLowerCase()) ||
          (j.company || '').toLowerCase().includes(query.toLowerCase())
        );
        setJobs(filtered);
      } else {
        setJobs(res.data);
      }
    }).catch(err => {
      console.error('Failed to fetch jobs', err);
      setJobs([]);
    });
  };

  useEffect(() => {
    loadJobs(q);
  }, [q]);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Latest Jobs</h2>
        <JobSearch onSearch={(val) => setQ(val)} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-10">No jobs found.</div>
        ) : (
          jobs.map(job => <JobCard key={job.id || job.title} job={job} />)
        )}
      </div>
    </div>
  );
}
