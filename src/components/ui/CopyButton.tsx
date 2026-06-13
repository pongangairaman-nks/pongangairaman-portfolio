"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-6 py-2.5 text-sm font-medium bg-[var(--card-surface)] rounded-full text-neutral-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 active:scale-95 cursor-pointer"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
