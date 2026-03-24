"use client";
import React, { useState } from 'react';
import { RefreshCw, Hash } from 'lucide-react';

export default function BloxOneGenerator() {
  const [number, setNumber] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateNumber = () => {
    setIsAnimating(true);
    
    // Simple "rolling" effect duration
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 1000) + 1;
      setNumber(randomNum);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center font-sans text-slate-100">
      <div className="w-full max-w-md p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Hash size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">BloxOne</h1>
        </div>

        {/* Display Area */}
        <div className="relative h-48 mb-8 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden">
          {number !== null ? (
            <span className={`text-7xl font-black transition-all duration-200 ${isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
              {number}
            </span>
          ) : (
            <span className="text-slate-600 font-medium italic">Ready to roll...</span>
          )}
          
          {/* Decorative Grid background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', size: '20px 20px', backgroundSize: '20px 20px' }}>
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={generateNumber}
          disabled={isAnimating}
          className="w-full group relative flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50"
        >
          <RefreshCw className={`transition-transform duration-500 ${isAnimating ? 'rotate-180' : 'group-hover:rotate-45'}`} />
          {isAnimating ? "Generating..." : "Generate Number"}
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          Powered by <span className="text-blue-400 font-semibold">BloxOne</span> Engine
        </p>
      </div>
    </div>
  );
}
