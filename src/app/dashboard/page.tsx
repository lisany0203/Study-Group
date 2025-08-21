'use client'; // This directive is necessary to use client-side hooks like Link

import Link from 'next/link'; // Import the Link component for navigation

export default function Homepage() {
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
            <button className="mt-6 px-6 py-3 bg-[#2CA6A4] text-white rounded hover:bg-[#2CA6A4]/80 transition w-2/3 mx-auto block">
              Create Group
            </button>
          </div>

          <div className="flex-1 bg-[#FBF6F1] p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Join a Study Group</h2>
            <p className="text-lg text-gray-600">
              Find and join existing study groups that match your interest and schedule.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#2CA6A4] text-white rounded hover:bg-[#2CA6A4]/80 transition w-2/3 mx-auto block">
              Join Group
            </button>
          </div>
        </div>

        {/* The redundant "Login" button section was removed from here.
            Navigation to login/signup is now handled by the Topbar component.
        */}
      </div>
    </main>
  );
}
