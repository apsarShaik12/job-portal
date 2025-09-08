import React, { useState } from 'react';
import { postJob } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function PostJob() {
  const [form, setForm] = useState({
    title: '', company: '', location: '', salary: '', description: '', requirements: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postJob(form);
      if (res.status === 201) {
        navigate('/jobs');
      }
    } catch (err) {
      console.error('Create job failed', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange} className="w-full p-3 border rounded" required />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} className="w-full p-3 border rounded" required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} className="w-full p-3 border rounded" />
        <input name="salary" placeholder="Salary" value={form.salary} onChange={handleChange} className="w-full p-3 border rounded" />
        <textarea name="description" placeholder="Short description" value={form.description} onChange={handleChange} className="w-full p-3 border rounded" rows="4" />
        <textarea name="requirements" placeholder="Requirements" value={form.requirements} onChange={handleChange} className="w-full p-3 border rounded" rows="3" />
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md">Post Job</button>
          <button type="button" onClick={() => navigate('/jobs')} className="px-6 py-3 border rounded-md">Cancel</button>
        </div>
      </form>
    </div>
  );
}
