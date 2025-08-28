'use client'; // This directive is necessary to use client-side hooks like Link

import Link from 'next/link'; // Import the Link component for navigation
import { useState } from 'react';
export default function Homepage() {

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  return (
    
    <main className="flex-1 p-10">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to KoStudy</h1>
        <p className="text-lg text-gray-600">
          Your personal study groups scheduler. Join existing group or create new group to collaborate with fellow students.
        </p>

        {/* Two-block layout from your original design */}
        <div className="mt-6 flex flex-col md:flex-row gap-6 bg-white">
          <div className="flex-1 bg-[#EEF7FA] p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Create a New Group</h2>
            <p className="text-lg text-gray-600">
              Create your own group and invite others to join. Set schedule, topic, and goals.
            </p>
            <button
            type="button"
            aria-label="Create group"
            onClick={() => setShowCreateModal(true)}
            className="mt-6 px-6 py-3 bg-[#2CA6A4] text-white rounded hover:bg-[#2CA6A4]/80 transition w-2/3 mx-auto block text-center"
          >
            Create Group
          </button>
          </div>

          <div className="flex-1 bg-[#FBF6F1] p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Join a Study Group</h2>
            <p className="text-lg text-gray-600">
              Find and join existing study groups that match your interest and schedule.
            </p>
            <button
            type="button"
            aria-label="Join group"
            onClick={() => setShowJoinModal(true)}
            className="mt-6 px-6 py-3 bg-[#2CA6A4] text-white rounded hover:bg-[#2CA6A4]/80 transition w-2/3 mx-auto block text-center"
          >
            Join Group
          </button>
          </div>
        </div>

        {showCreateModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg w-96 p-6 text-black">
            <div className="flex justify-end">
              <button onClick={() => setShowCreateModal(false)} className="text-black hover:text-gray-700 text-2xl leading-none">
              &times;
              </button>
            </div>
            <div className="mt-2 text-center">
              <p>please login if you have an account or sign up before create group or join group</p>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/auth/login" className="px-6 py-3 bg-[#2CA6A4] text-white rounded hover:bg-[#2CA6A4]/80 transition text-center">
                Login
              </Link>
              <Link href="/auth/signup" className="px-6 py-3 bg-white text-[#2CA6A4] rounded hover:bg-[#2CA6A4]/80 hover:text-white transition text-center border border-[#2CA6A4]">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
      {showJoinModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg w-96 p-6 text-black">
            <div className="flex justify-end">
              <button onClick={() => setShowJoinModal(false)} className="text-black hover:text-gray-700 text-2xl leading-none">
              &times;
              </button>
            </div>
            <div className="mt-2 text-center">
              <p>please login if you have an account or sign up before create group or join group</p>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/auth/login" className="px-6 py-3 bg-[#2CA6A4] text-white rounded hover:bg-[#2CA6A4]/80 transition text-center">
                Login
              </Link>
              <Link href="/auth/signup" className="px-6 py-3 bg-white text-[#2CA6A4] rounded hover:bg-[#2CA6A4]/80 hover:text-white transition text-center border border-[#2CA6A4]">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
      </div>
    </main>
  );
}

