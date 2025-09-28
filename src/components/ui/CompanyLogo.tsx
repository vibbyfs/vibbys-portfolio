"use client";
import React, { useState } from 'react';

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function CompanyLogo({ src, alt = '', className = 'object-contain w-full h-full' }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden transform transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer">
      {failed ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="w-full h-full">
          <rect width="120" height="120" fill="#eef2ff" />
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#4338ca" fontSize="18">
            Logo
          </text>
        </svg>
      ) : (
        <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
