"use client";

import React from "react";
import SmoothScrollProvider from "./SmoothScrollProvider";
import CustomCursor from "./CustomCursor";
import NoiseOverlay from "./NoiseOverlay";
import ShutterPreloader from "./ShutterPreloader";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      {/* Purely visual fixed architectural shutter overlay - does not delay DOM/SSR */}
      <ShutterPreloader />

      {/* Dual-ring magnetic cursor */}
      <CustomCursor />

      {/* Cinematic film grain noise texture */}
      <NoiseOverlay />

      {children}
    </SmoothScrollProvider>
  );
}
