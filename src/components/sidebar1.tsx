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
          <div className="bg-white rounded-xl shadow-lg w-96 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-black">Create Group</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-500 hover:text-gray-800">
                &times;
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter group name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]"
              />
              <button
                type="submit"
                className="w-full bg-[#2CA6A4] text-white py-2 rounded-lg hover:bg-[#2CA6A4]/90"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Join Group Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg w-96 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-black">Join Group</h2>
              <button onClick={() => setShowJoinModal(false)} className="text-gray-500 hover:text-gray-800">
                &times;
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter code or link"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]"
              />
              <button
                type="submit"
                className="w-full bg-[#2CA6A4] text-white py-2 rounded-lg hover:bg-[#2CA6A4]/90"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      )}
    </aside>
  );
}

