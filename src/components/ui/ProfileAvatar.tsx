"use client";

import { useEffect, useState } from "react";

/**
 * Circular black-and-white avatar that mirrors the reference design.
 * Shows a neutral silhouette by default and probes /photo.jpg on mount —
 * the real photo is shown only if it actually loads (forced to grayscale).
 * Drop a file at public/photo.jpg to swap it in; no code change required.
 */
export default function ProfileAvatar({
  alt = "Profile photo",
  className = "",
}: {
  alt?: string;
  className?: string;
}) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setSrc("/photo.jpg");
    img.onerror = () => setSrc(null);
    img.src = "/photo.jpg";
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-full bg-neutral-300 shadow-sm ring-1 ring-black/5 ${className}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover grayscale" />
      ) : (
        <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label={alt}>
          <rect width="100" height="100" fill="#d6d6d6" />
          <circle cx="50" cy="37" r="17" fill="#9d9d9d" />
          <path d="M15 100c0-21 16-33 35-33s35 12 35 33Z" fill="#9d9d9d" />
        </svg>
      )}
    </div>
  );
}
