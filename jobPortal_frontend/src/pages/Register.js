import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await registerUser({ email, password, mobile });
      if (res.status === 201) {
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <div className="text-red-600 mb-3">{error}</div>}
      <form onSubmit={handleRegister} className="space-y-4">
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-3 border rounded" required />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-3 border rounded" required />
        <input value={mobile} onChange={e => setMobile(e.target.value)} type="text" placeholder="Mobile Number" className="w-full p-3 border rounded" />
        <button type="submit" className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md">Register</button>
      </form>
    </div>
  );
}
