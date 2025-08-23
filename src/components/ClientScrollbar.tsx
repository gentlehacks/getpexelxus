"use client";

import { Scrollbar } from "react-scrollbars-custom";

export default function ClientScrollbar({ children }: { children: React.ReactNode }) {
  return (
    <Scrollbar
      style={{ height: "100vh" }}
      trackYProps={{
        style: {
          right: "1px", // floating from edge
          width: "8px",
          borderRadius: "10px",
          background: "transparent",
        },
      }}
      thumbYProps={{
        style: {
          background: "rgba(28, 24, 248, 1)",
          borderRadius: "10px",
        },
      }}
    >
      {children}
    </Scrollbar>
  );
}
