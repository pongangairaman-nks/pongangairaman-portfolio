import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Force the résumé to download with a proper filename on every host
        // (Vercel/CDN don't honor the <a download> attribute the way `next dev`
        // does — the Content-Disposition header is authoritative).
        source: "/cv.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value:
              'attachment; filename="PonGangaiRaman_FrontEnd_Engineer_Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
