// src/components/topbar.tsx
import Link from "next/link"; // Ensure Link is imported

export default function Topbar1() {
  return (
    <header className="w-full bg-white border-b border-border text-[#0A2342] px-6 py-4 flex items-center justify-between">
      {/* Search Bar: simple GET form -> /search?q=... */}
      <form action="/search" method="GET" className="flex items-center gap-2">
        <input
          name="q"
          type="text"
          placeholder="Search..."
          className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] bg-gray-100 text-[#0A2342] w-64"
        />
        <button className="px-3 py-2 bg-[#2CA6A4] text-white rounded hover:bg-[#2CA6A4]/80 transition">
          Search
        </button>
      </form>

      {/* Nav links (client navigation) */}
      <div className="flex items-center gap-4">
        {/* Link to the About page */}
        <Link href="/about" className="px-4 py-2 bg-[#0A2342] text-white rounded hover:bg-[#0A2342]/80 transition">
          About
        </Link>
        
      </div>
    </header>
  );
}
