// import React from 'react'

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-[#0A2342] text-white p-6">
//             <h1 className="text-2xl font-bold text-[#2CA6A4] mb-6">KoStudy</h1>
//             <hr className="border-t border-[#717171] my-0 -mx-6 " />
//             <nav className="space-y-4">

//               <div className="flex items-center justify-between px-2 py-4">
//                 <a href="#" className="text-md">
//                   My Group
//                 </a>

//                 <button
//                   type="button"
//                   aria-label="Create group"
//                   className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2CA6A4] hover:bg-[#2CA6A4]/90 text-white text-2xl leading-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]/50 -mr-6"
//                 >
//                   +
//                 </button>
//               </div>
//             </nav>
//             <hr className="border-t border-[#717171] my-0 -mx-6 " />
//           </aside>
//   )
// }

"use client";
import React, { useState } from "react";

import Link from 'next/link'; // Import the Link component for navigation


export default function Sidebar() {
  const [showOptions, setShowOptions] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  return (
    <aside className="w-64 bg-[#0A2342] text-white p-6 relative">
      <h1 className="text-2xl font-bold text-[#2CA6A4] mb-6">KoStudy</h1>
      <hr className="border-t border-[#717171] my-0 -mx-6 " />
      <nav className="space-y-4">
        <div className="flex items-center justify-between px-2 py-4 relative">
          <a href="#" className="text-md">
            My Group
          </a>

          {/* + Button */}
          <button
            type="button"
            aria-label="Create group"
            onClick={() => setShowOptions(!showOptions)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2CA6A4] hover:bg-[#2CA6A4]/90 text-white text-2xl leading-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]/50 -mr-6"
          >
            +
          </button>

          {/* Dropdown Options */}
          {showOptions && (
            <div className="absolute right-0 top-12 bg-white text-black shadow-lg rounded-lg w-40 z-20">
              <button
                onClick={() => {
                  setShowOptions(false);
                  setShowCreateModal(true);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-t-lg"
              >
                Create Group
              </button>
              <button
                onClick={() => {
                  setShowOptions(false);
                  setShowJoinModal(true);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-b-lg"
              >
                Join Group
              </button>
            </div>
          )}
        </div>
      </nav>
      <hr className="border-t border-[#717171] my-0 -mx-6 " />

      {/* Create Group Modal */}
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
    </aside>
  );
}

