"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TextWordScrubProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

export default function TextWordScrub({
  text,
  className = "",
  highlightWords = [],
}: TextWordScrubProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const spans = containerRef.current.querySelectorAll(".scrub-word");
    if (!spans.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        {
          opacity: 0.15,
          color: "#475569",
        },
        {
          opacity: 1,
          color: "#f8fafc",
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`leading-relaxed ${className}`}>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span
            key={index}
            className={`scrub-word inline-block transition-colors duration-150 mr-[0.28em] ${
              isHighlight ? "font-semibold text-emerald-400" : ""
            }`}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}
