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
  const [loadingGroups, setLoadingGroups] = useState(true);
  const [groups, setGroups] = useState<unknown[]>([]);

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
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      
    </div>

{/* Create Group Modal */}
{showCreateModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white rounded-xl shadow-lg w-96 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Create New Group</h2>
        <button 
          onClick={() => setShowCreateModal(false)} 
          className="text-gray-500 hover:text-gray-800 text-3xl font-light leading-none"
        >
          &times;
        </button>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="group-name" className="block text-sm font-semibold text-gray-700 mb-1">Group Name</label>
          <input
            id="group-name"
            type="text"
            placeholder="Name"
            className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]"
          />
        </div>
        <div>
          <label htmlFor="subject-name" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
          <input
            id="subject-name"
            type="text"
            placeholder="Subject Name"
            className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]"
          />
        </div>
        <div>
          <label htmlFor="descriptions" className="block text-sm font-semibold text-gray-700 mb-1">Descriptions</label>
          <textarea
            id="descriptions"
            placeholder=""
            className="w-full h-24 text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] resize-none"
          ></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input type="radio" name="visibility" value="public" defaultChecked className="form-radio text-[#2CA6A4] focus:ring-[#2CA6A4] h-4 w-4" />
            <span>Public</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input type="radio" name="visibility" value="private" className="form-radio text-[#2CA6A4] focus:ring-[#2CA6A4] h-4 w-4" />
            <span>Private</span>
          </label>
        </div>
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={() => setShowCreateModal(false)}
            className="px-6 py-2 rounded-lg text-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-[#2CA6A4] text-white hover:bg-[#2CA6A4]/90 transition-colors"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      {/* Join Group Modal */}
{showJoinModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white rounded-xl shadow-lg w-96 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Join Group</h2>
        <button
          onClick={() => setShowJoinModal(false)}
          className="text-gray-500 hover:text-gray-800 text-3xl font-light leading-none"
        >
          &times;
        </button>
      </div>
      <form className="space-y-6">
        <div>
          <label htmlFor="join-code" className="block text-sm font-semibold text-gray-700 mb-1">Code</label>
          <input
            id="join-code"
            type="text"
            placeholder="code"
            className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]"
          />
        </div>
        <div className="flex items-center justify-center relative my-4">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="absolute px-4 text-gray-400 bg-white text-sm font-semibold">
            OR
          </span>
        </div>
        <div>
          <label htmlFor="join-link" className="block text-sm font-semibold text-gray-700 mb-1">Link</label>
          <input
            id="join-link"
            type="text"
            placeholder="link"
            className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]"
          />
        </div>
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={() => setShowJoinModal(false)}
            className="px-6 py-2 rounded-lg text-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-[#2CA6A4] text-white hover:bg-[#2CA6A4]/90 transition-colors"
          >
            Join
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </aside>
  );
}

