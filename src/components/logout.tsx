// components/LogoutButton.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    setLoading(false);

    if (error) {
      console.error('Logout error:', error.message);
      alert('Failed to log out. Please try again.');
    } else {
      // Redirect to login page
      router.push('/auth/login');
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={`px-4 py-2 rounded-md font-semibold transition duration-200 ${
        loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#2CA6A4] hover:bg-[#2CA6A4]/80 text-white'
      }`}
    >
      {loading ? 'Logging out...' : 'Logout'}
    </button>
  );
}
