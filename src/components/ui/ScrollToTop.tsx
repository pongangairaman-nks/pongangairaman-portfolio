"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-8 right-8 z-[9998] flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 hover:text-neutral-900 hover:shadow-md active:scale-95",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 13V3M3.5 7.5L8 3l4.5 4.5" />
      </svg>
    </button>
  );
}
