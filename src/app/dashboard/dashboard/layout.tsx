// src/app/(dashboard)/dashboard/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import Topbar1 from '@/components/topbar1';
import Sidebar1 from '@/components/sidebar1';

// Note: You do not need to redefine fonts or metadata in a nested layout.
// They are inherited from the root layout.

// Layout Component
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The wrapper div is all that is needed here.
    // The <html> and <body> tags are provided by the root layout.
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar1 />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar1 */}
        <Topbar1 />

        {/* Page Content */}
        <main className="flex-1 p-10">
          {children}
        </main>
      </div>
    </div>
  );
}