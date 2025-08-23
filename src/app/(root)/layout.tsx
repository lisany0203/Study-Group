import React from "react";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <div className="flex min-h-screen">

          {/* Sidebar */}
          <Sidebar />

          {/* Main Area */}
          <div className="flex-1 flex flex-col">
            {/* Topbar inside main area */}
            <Topbar />
            {children}
          </div>

        </div>
        <footer>
        
      </footer>
      </>
  );
};

export default Layout;