// pages/login.tsx
'use client'; // This component needs client-side interactivity

import { useState } from 'react';
import Head from 'next/head'; // For setting page title and meta tags
import BackButton from '@/components/backbutton'; // Import the BackButton component
import { createClient } from '@/utils/supabase/client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setMessage('');

  try {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);

    // Successful login
    setMessage('Login successful! Redirecting...');
    setTimeout(() => window.location.href = '/dashboard', 1500);

  } catch (err: unknown) {
    console.log('Login error:', (err as Error).message);
    setMessage((err as Error).message || 'Login failed. Please try again.');
  } finally {
    setLoading(false);
  }
};
  // const handleGoogleLogin = async () => {
  //   // Simulated login for demonstration
  //   try {
  //       const response = await fetch('/api/auth/login', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ email, password }),
  //       });

  //       const data = await response.json();

  //       if (!response.ok) {
  //         throw new Error(data.message || 'Login failed');
  //       }
        

  //       setMessage('Login successful! Redirecting...');
  //       // Example redirect:
  //       window.location.href = '/dashboard';
  //     } catch (err: unknown) {
  //       setMessage((err as Error).message);
  //     } finally {
  //       setLoading(false);
  //     }
  // }

  return (
    <>
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
      {/* Head component for SEO and browser tab title */}
      <Head>
        <title>Login - KoStudy</title>
        <meta name="description" content="Login to your KoStudy account to manage study groups." />
      </Head>

      {/* Main container for the login page, centered vertically and horizontally */}
      <div className="flex items-center justify-center min-h-screen bg-[#FCF9F6] p-4">
        {/* Login Form Card */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">Welcome Back!</h1>
          <p className="text-center text-gray-600">Sign in to your KoStudy account.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] focus:border-transparent transition duration-200"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] focus:border-transparent transition duration-200"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-md text-white font-semibold transition duration-200
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#2CA6A4] hover:bg-[#2CA6A4]/80 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]'}
              `}
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Message Display (Success/Error) */}
          {message && (
            <p className={`text-center text-sm ${message.includes('successful') ? 'text-green-600' : 'text-red-600'} mt-4`}>
              {message}
            </p>
          )}

          {/* Link to Sign Up page */}
          <div className="text-center text-sm text-gray-600">
            Don&apos;t have an account? {' '}
            <a href="/auth/signup" className="text-[#2CA6A4] hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

