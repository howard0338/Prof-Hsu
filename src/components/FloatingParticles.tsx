"use client";

import React from 'react';
import { Circle, Hexagon, Triangle } from 'lucide-react';

export const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Large drifted Circle - Top Right */}
      <div className="bio-particle text-bio-200 top-[10%] right-[5%] animate-float-slow opacity-20">
        <Circle size={120} strokeWidth={1} />
      </div>

      {/* Hexagon (representing chemical structure) - Middle Left */}
      <div className="bio-particle text-regen-200 top-[40%] left-[5%] animate-float-medium opacity-20">
        <Hexagon size={80} strokeWidth={1} />
      </div>

      {/* Small Triangle - Bottom Right */}
      <div className="bio-particle text-bio-300 bottom-[15%] right-[15%] animate-float-fast opacity-15">
        <Triangle size={60} strokeWidth={1} />
      </div>

      {/* Extra Circle - Top Left */}
      <div className="bio-particle text-regen-100 top-[15%] left-[20%] animate-float-slow opacity-20" style={{ animationDelay: '2s' }}>
        <Circle size={40} strokeWidth={1.5} />
      </div>

       {/* Hexagon - Bottom Left */}
       <div className="bio-particle text-bio-100 bottom-[10%] left-[10%] animate-float-medium opacity-10" style={{ animationDelay: '5s' }}>
        <Hexagon size={140} strokeWidth={0.5} />
      </div>
    </div>
  );
};