// src/app/components/BackButton.tsx
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      style={{
        // Add your consistent styling here
        position: 'absolute',
        top: '5px',
        left: '10px',
        backgroundColor: '#ffffff',
        color: 'grey',
        padding: '10px 25px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      Back
    </button>
  );
}