"use client";

import React from "react";
import Image from "next/image";

interface KasvelloLogoProps {
  className?: string;
  variant?: "badge" | "dark" | "white";
  size?: "sm" | "md" | "lg";
}

export default function KasvelloLogo({
  className = "",
  size = "md",
}: KasvelloLogoProps) {
  const heightClasses = {
    sm: "h-7",
    md: "h-9",
    lg: "h-11",
  }[size];

  return (
    <div
      className={`inline-flex items-center justify-center select-none transition-transform duration-200 hover:scale-105 ${className}`}
    >
      <Image
        src="/kasvello-logo.svg"
        alt="Kasvello Logo"
        width={130}
        height={39}
        className={`${heightClasses} w-auto object-contain rounded-xl shadow-sm shadow-[#FE751F]/20`}
        priority
      />
    </div>
  );
}
