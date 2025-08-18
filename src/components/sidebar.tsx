import React from 'react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0A2342] text-white p-6">
            <h1 className="text-2xl font-bold text-[#2CA6A4] mb-6">KoStudy</h1>
            <hr className="border-t border-[#717171] my-0 -mx-6 " />
            <nav className="space-y-4">

              <div className="flex items-center justify-between px-2 py-4">
                <a href="#" className="text-md">
                  My Group
                </a>

                <button
                  type="button"
                  aria-label="Create group"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2CA6A4] hover:bg-[#2CA6A4]/90 text-white text-2xl leading-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2CA6A4]/50 -mr-6"
                >
                  +
                </button>
              </div>
            </nav>
            <hr className="border-t border-[#717171] my-0 -mx-6 " />
          </aside>
  )
}
