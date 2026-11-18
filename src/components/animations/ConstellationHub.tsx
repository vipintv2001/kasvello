"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NodeItem {
  id: string;
  name: string;
  sub: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  isCenter?: boolean;
}

const NODES: NodeItem[] = [
  { id: "kasaragod", name: "Kasaragod (HQ)", sub: "12.51°N, 75.00°E", x: 48, y: 50, isCenter: true },
  { id: "kannur", name: "Kannur", sub: "Kerala Corridor", x: 26, y: 32 },
  { id: "kochi", name: "Kochi", sub: "Commercial Hub", x: 30, y: 72 },
  { id: "bengaluru", name: "Bengaluru", sub: "Tech Ecosystem", x: 74, y: 28 },
  { id: "dubai", name: "Dubai / GCC", sub: "Cross-Border Market", x: 78, y: 68 },
  { id: "global", name: "Global Reach", sub: "Worldwide Clients", x: 52, y: 14 },
];

export default function ConstellationHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>("kasaragod");
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const centerNode = NODES.find((n) => n.isCenter)!;
  const outerNodes = NODES.filter((n) => !n.isCenter);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[380px] sm:h-[440px] rounded-3xl border border-white/[0.08] bg-[#080a0f]/90 backdrop-blur-2xl p-6 overflow-hidden select-none"
    >
      {/* Radial Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.12), transparent 60%)`,
        }}
      />

      {/* SVG Connecting Radiation Beams */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {outerNodes.map((node) => {
          const isActive = activeNode === node.id || activeNode === "kasaragod";
          return (
            <g key={`beam-${node.id}`}>
              {/* Static trace */}
              <line
                x1={`${centerNode.x}%`}
                y1={`${centerNode.y}%`}
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke={isActive ? "url(#beamGradient)" : "rgba(255,255,255,0.08)"}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray="4 4"
                className="transition-all duration-300"
              />

              {/* Pulsing Signal Packet moving along ray */}
              <motion.circle
                r={3}
                fill="#10b981"
                filter="url(#glow)"
                animate={{
                  cx: [`${centerNode.x}%`, `${node.x}%`],
                  cy: [`${centerNode.y}%`, `${node.y}%`],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 1.5,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Render Constellation Nodes */}
      {NODES.map((node) => {
        const isCenter = node.isCenter;
        const isHovered = activeNode === node.id;

        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            className="absolute z-20 cursor-pointer group flex flex-col items-center"
          >
            {/* Center Glowing Hub Indicator */}
            <div
              className={`relative flex items-center justify-center transition-all duration-300 ${
                isCenter
                  ? "w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                  : "w-8 h-8 rounded-xl bg-white/[0.04] border border-white/20 group-hover:border-emerald-400 group-hover:bg-emerald-500/10"
              }`}
            >
              {isCenter ? (
                <div className="w-full h-full bg-[#040507] rounded-2xl flex flex-col items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                </div>
              ) : (
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    isHovered ? "bg-cyan-400 shadow-[0_0_8px_#06b6d4]" : "bg-slate-400"
                  }`}
                />
              )}
            </div>

            {/* Node Label Card */}
            <div
              className={`mt-2 text-center pointer-events-none transition-all duration-200 ${
                isHovered || isCenter ? "opacity-100 scale-100" : "opacity-75 scale-95"
              }`}
            >
              <div
                className={`text-[11px] font-bold tracking-tight whitespace-nowrap ${
                  isCenter ? "text-emerald-400 font-mono" : "text-slate-200"
                }`}
              >
                {node.name}
              </div>
              <div className="text-[9px] font-mono text-slate-400 whitespace-nowrap">
                {node.sub}
              </div>
            </div>
          </div>
        );
      })}

      {/* Bottom Hub Status Badge */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/[0.06] pt-3">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Telemetry: Active Sync
        </span>
        <span>Kasvello Radiation Matrix</span>
      </div>
    </div>
  );
}
