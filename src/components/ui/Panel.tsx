import type { ReactNode } from "react";

/**
 * A stacked rounded "card" layer. Panels alternate gray/white surfaces and
 * overlap the next one (-mt-10) so each rounded bottom reveals the panel
 * behind it. z descends down the page so upper cards sit on top.
 */
export default function Panel({
  surface,
  z,
  first = false,
  last = false,
  children,
}: {
  surface: "gray" | "white";
  z: number;
  first?: boolean;
  last?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={[
        "relative",
        last ? "" : "rounded-b-[5rem]",
        surface === "white" ? "panel-white" : "panel-gray",
        first ? "" : "-mt-20 pt-12",
      ].join(" ")}
      style={{ zIndex: z }}
    >
      {children}
    </div>
  );
}
