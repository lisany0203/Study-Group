
'use client';

import { useState } from 'react';
import Head from 'next/head'; // Import Head for page title and meta tags
import Link from 'next/link'; // Import Link for navigation

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Simulate an API call for signup
    try {
      // In a real application, you would make an API call here
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, password }),
      // });

      // if (!response.ok) {
      //   throw new Error('Sign up failed');
      // }

      // const data = await response.json();
      // console.log('Sign up successful:', data);

      // Simulated signup for demonstration
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (name && email && password) { // Simple validation for demo
        setMessage('Sign up successful! Redirecting to login...');
        // In a real app, you'd redirect the user after successful signup
        // For example: router.push('/login');
      } else {
        throw new Error('Please fill in all fields.');
      }
    } catch (error: any) {
      console.error('Sign up error:', error);
      setMessage(error.message || 'Sign up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up - KoStudy</title>
        <meta name="description" content="Sign up for a KoStudy account" />
      </Head>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#FCF9F6] p-4 gap-8">
        {/* Sign Up Form Card (Left Side on larger screens) */}
        <div className="w-full max-w-md bg-[#0A2342] rounded-lg shadow-xl p-8 space-y-6 text-white">
          <h1 className="text-3xl font-bold text-center">Sign up</h1>
          <p className="text-center text-gray-300 text-sm">Welcome to KoStudy! Please enter your details.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-600 bg-[#1A324E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] focus:border-transparent transition duration-200 text-white"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-600 bg-[#1A324E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] focus:border-transparent transition duration-200 text-white"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Create Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-600 bg-[#1A324E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] focus:border-transparent transition duration-200 pr-10 text-white"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                />
                {/* Placeholder Eye icon for password visibility toggle */}
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-md font-semibold transition duration-200
                ${loading ? 'bg-gray-400 cursor-not-allowed text-gray-600' : 'bg-[#2CA6A4] hover:bg-[#2CA6A4]/80 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] text-white'}
              `}
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>

          {/* Message Display (Success/Error) */}
          {message && (
            <p className={`text-center text-sm ${message.includes('successful') ? 'text-green-400' : 'text-red-400'} mt-4`}>
              {message}
            </p>
          )}

          {/* Link to Login page */}
          <div className="text-center text-sm text-gray-400">
            Already have an account? {' '}
            <Link href="/login" className="text-[#2CA6A4] hover:underline">
              Sign In
            </Link>
          </div>
        </div>

        {/* Image Placeholder on larger screens (Right Side on larger screens) */}
        <div className="hidden md:block flex-shrink-0">
          <img
            src="https://placehold.co/400x300/FBF6F1/333333?text=Collaboration+Image" // Placeholder image URL
            alt="Students collaborating"
            className="rounded-lg shadow-md max-w-full h-auto"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/FBF6F1/333333?text=Image+Not+Found'; }}
          />
        </div>
      </div>
    </>
  );
}
