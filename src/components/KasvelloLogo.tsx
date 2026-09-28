"use client";

import React from "react";

interface KasvelloLogoProps {
  className?: string;
  variant?: "badge" | "dark" | "white";
  size?: "sm" | "md" | "lg";
}

export default function KasvelloLogo({
  className = "",
  variant = "badge",
  size = "md",
}: KasvelloLogoProps) {
  // Height presets
  const heightClasses = {
    sm: "h-7",
    md: "h-9",
    lg: "h-12",
  }[size];

  if (variant === "badge") {
    return (
      <div
        className={`inline-flex items-center justify-center bg-[#FF5B00] rounded-xl px-3 py-1.5 shadow-sm shadow-[#FF5B00]/25 select-none transition-transform duration-200 hover:scale-105 ${className}`}
      >
        <svg
          viewBox="0 0 240 70"
          className={`${heightClasses} w-auto`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Authentic KASVELLO custom wavy typography */}
          <g fill="#FFFFFF">
            {/* K */}
            <path d="M12 18 C12 16, 17 14, 23 15 C23 26, 21 37, 23 48 C20 54, 15 56, 12 55 C12 43, 14 31, 12 18 Z" />
            <path d="M22 33 C26 27, 32 20, 39 16 C43 16, 45 19, 44 23 C38 28, 32 34, 27 38 C33 44, 38 50, 42 56 C38 58, 33 58, 29 52 C26 47, 24 41, 22 36 Z" />

            {/* A */}
            <path d="M47 55 C47 50, 49 33, 56 18 C59 14, 66 14, 68 18 C75 32, 78 48, 77 56 C71 57, 67 54, 67 48 C67 44, 57 44, 57 48 C57 54, 53 57, 47 55 Z M58 37 C65 37, 65 37, 62 26 C60 30, 59 34, 58 37 Z" />

            {/* S */}
            <path d="M80 48 C81 54, 87 57, 95 56 C102 55, 107 50, 106 44 C105 38, 97 35, 91 33 C84 31, 79 27, 80 21 C81 16, 87 13, 94 14 C100 15, 104 18, 105 23 C100 24, 98 25, 97 21 C95 19, 92 18, 89 19 C86 20, 85 22, 85 24 C85 27, 88 29, 95 31 C103 33, 112 37, 111 46 C110 54, 102 60, 91 60 C82 60, 75 55, 75 47 C77 46, 79 46, 80 48 Z" />

            {/* V */}
            <path d="M112 16 C118 16, 120 18, 121 23 C122 33, 126 44, 131 52 C137 44, 140 32, 141 22 C142 18, 145 16, 150 16 C149 22, 144 42, 135 55 C132 58, 128 58, 125 55 C118 43, 113 24, 112 16 Z" />

            {/* E */}
            <path d="M152 17 C164 16, 172 17, 175 22 C171 25, 163 24, 159 24 C159 29, 167 28, 172 31 C170 35, 164 34, 159 35 C159 41, 165 40, 171 43 C173 48, 168 53, 156 55 C151 55, 149 50, 149 43 C149 33, 150 24, 152 17 Z" />

            {/* LL */}
            <path d="M178 16 C183 16, 185 18, 185 25 C185 36, 184 46, 186 50 C189 50, 194 49, 198 48 C199 53, 195 56, 188 56 C181 56, 177 50, 177 42 C177 33, 177 23, 178 16 Z" />
            <path d="M200 16 C205 16, 207 18, 207 25 C207 36, 206 46, 208 50 C211 50, 215 49, 218 48 C219 53, 215 56, 209 56 C202 56, 199 50, 199 42 C199 33, 199 23, 200 16 Z" />
          </g>

          {/* Distinctive Oval 'O' with broadcast radar icon */}
          <g transform="translate(202, 12)">
            {/* White solid oval background for 'O' */}
            <ellipse cx="22" cy="24" rx="16" ry="22" fill="#FFFFFF" />

            {/* Black Broadcast / Radar Icon */}
            <g transform="translate(11, 13)">
              {/* Outer wave arc */}
              <path
                d="M 3 13 A 8 8 0 0 1 19 13"
                stroke="#0F172A"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
              {/* Inner wave arc */}
              <path
                d="M 6 15 A 5 5 0 0 1 16 15"
                stroke="#0F172A"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Upward central beacon pointer arrow */}
              <path
                d="M 11 11 L 16 20 L 11 17.5 L 6 20 Z"
                fill="#0F172A"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }

  // Dark Carbon on light backgrounds
  return (
    <div className={`inline-flex items-center gap-1.5 select-none ${className}`}>
      <div className="bg-[#FF5B00] rounded-xl px-2.5 py-1 flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 240 70" className={`${heightClasses} w-auto`} fill="none">
          <g fill="#FFFFFF">
            <path d="M12 18 C12 16, 17 14, 23 15 C23 26, 21 37, 23 48 C20 54, 15 56, 12 55 C12 43, 14 31, 12 18 Z" />
            <path d="M22 33 C26 27, 32 20, 39 16 C43 16, 45 19, 44 23 C38 28, 32 34, 27 38 C33 44, 38 50, 42 56 C38 58, 33 58, 29 52 C26 47, 24 41, 22 36 Z" />
            <path d="M47 55 C47 50, 49 33, 56 18 C59 14, 66 14, 68 18 C75 32, 78 48, 77 56 C71 57, 67 54, 67 48 C67 44, 57 44, 57 48 C57 54, 53 57, 47 55 Z M58 37 C65 37, 65 37, 62 26 C60 30, 59 34, 58 37 Z" />
            <path d="M80 48 C81 54, 87 57, 95 56 C102 55, 107 50, 106 44 C105 38, 97 35, 91 33 C84 31, 79 27, 80 21 C81 16, 87 13, 94 14 C100 15, 104 18, 105 23 C100 24, 98 25, 97 21 C95 19, 92 18, 89 19 C86 20, 85 22, 85 24 C85 27, 88 29, 95 31 C103 33, 112 37, 111 46 C110 54, 102 60, 91 60 C82 60, 75 55, 75 47 C77 46, 79 46, 80 48 Z" />
            <path d="M112 16 C118 16, 120 18, 121 23 C122 33, 126 44, 131 52 C137 44, 140 32, 141 22 C142 18, 145 16, 150 16 C149 22, 144 42, 135 55 C132 58, 128 58, 125 55 C118 43, 113 24, 112 16 Z" />
            <path d="M152 17 C164 16, 172 17, 175 22 C171 25, 163 24, 159 24 C159 29, 167 28, 172 31 C170 35, 164 34, 159 35 C159 41, 165 40, 171 43 C173 48, 168 53, 156 55 C151 55, 149 50, 149 43 C149 33, 150 24, 152 17 Z" />
            <path d="M178 16 C183 16, 185 18, 185 25 C185 36, 184 46, 186 50 C189 50, 194 49, 198 48 C199 53, 195 56, 188 56 C181 56, 177 50, 177 42 C177 33, 177 23, 178 16 Z" />
            <path d="M200 16 C205 16, 207 18, 207 25 C207 36, 206 46, 208 50 C211 50, 215 49, 218 48 C219 53, 215 56, 209 56 C202 56, 199 50, 199 42 C199 33, 199 23, 200 16 Z" />
          </g>
          <g transform="translate(202, 12)">
            <ellipse cx="22" cy="24" rx="16" ry="22" fill="#FFFFFF" />
            <g transform="translate(11, 13)">
              <path
                d="M 3 13 A 8 8 0 0 1 19 13"
                stroke="#0F172A"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 6 15 A 5 5 0 0 1 16 15"
                stroke="#0F172A"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 11 11 L 16 20 L 11 17.5 L 6 20 Z"
                fill="#0F172A"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
