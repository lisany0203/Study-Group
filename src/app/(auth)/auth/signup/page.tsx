
'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BackButton from '@/components/backbutton';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client'; // Assuming you have this file

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Sign up failed. Please try again.');
      }

      console.log('Sign up successful:', data);
      setMessage('Sign up successful! Redirecting to dashboard...');

      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);

    } catch (error: any) {
      console.log('Sign up error:', error.message);
      setMessage(error.message || 'Sign up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error('Google login error:', error);
      setMessage('Failed to sign in with Google. Please try again.');
    }
  };

  return (
    <>
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
      <Head>
        <title>Sign Up - KoStudy</title>
        <meta name="description" content="Sign up for a KoStudy account" />
      </Head>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#FCF9F6] p-4 gap-8">
        <div className="w-full max-w-md bg-[#0A2342] rounded-lg shadow-xl p-8 space-y-6 text-white">
          <h1 className="text-3xl font-bold text-center">Sign up</h1>
          <p className="text-center text-gray-300 text-sm">Welcome to KoStudy! Please enter your details.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
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

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Create Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full p-3 border border-gray-600 bg-[#1A324E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] focus:border-transparent transition duration-200 pr-10 text-white"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          
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

          <div className="flex items-center justify-center space-x-2 my-4">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="text-sm font-medium text-gray-400">- or -</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>
          
          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 px-4 rounded-md font-semibold flex items-center justify-center space-x-3 bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] transition duration-200"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.94 12.289c0-.77-.068-1.5-.181-2.221H12.247v4.195h6.58c-.287 1.488-1.168 2.766-2.43 3.633v2.71h3.498c2.049-1.892 3.232-4.708 3.232-8.327z" fill="#4285F4"></path>
              <path d="M12.247 24c3.298 0 6.07-1.085 8.093-2.946l-3.498-2.71c-.968.627-2.197.999-3.495.999-2.684 0-4.96-1.79-5.772-4.218H2.94v2.793C4.855 21.846 8.356 24 12.247 24z" fill="#34A853"></path>
              <path d="M6.475 14.284c-.218-.627-.34-1.292-.34-1.979s.122-1.352.34-1.979V7.512H2.94C2.202 8.956 1.83 10.457 1.83 12c0 1.543.372 3.044 1.11 4.488l3.535-2.204z" fill="#FBBC04"></path>
              <path d="M12.247 4.183c2.405 0 4.544.825 6.137 2.398L16.035 9.17c-.895-.87-2.028-1.4-3.788-1.4-2.684 0-4.96 1.79-5.772 4.218H2.94V7.512C4.855 5.154 8.356 3 12.247 3c1.782 0 3.32.552 4.67 1.483z" fill="#EA4335"></path>
            </svg>
            <span>Sign Up with Google</span>
          </button>
          
          {message && (
            <p className={`text-center text-sm ${message.includes('successful') ? 'text-green-400' : 'text-red-400'} mt-4`}>
              {message}
            </p>
          )}

          <div className="text-center text-sm text-gray-400">
            Already have an account? {' '}
            <Link href="/auth/login" className="text-[#2CA6A4] hover:underline">
              Sign In
            </Link>
          </div>
        </div>

        <div className="hidden md:block flex-shrink-0">
          <img
            src="https://placehold.co/400x300/FBF6F1/333333?text=Collaboration+Image"
            alt="Students collaborating"
            className="rounded-lg shadow-md max-w-full h-auto"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/FBF6F1/333333?text=Image+Not+Found'; }}
          />
        </div>
      </div>
    </>
  );
}