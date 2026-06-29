"use client";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function DotsPage() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "black", position: "relative", overflow: "hidden" }}>
      <DottedSurface />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
        <h1 style={{ color: "white", fontFamily: "monospace", fontSize: "2.5rem", fontWeight: 600 }}>
          Dotted Surface
        </h1>
      </div>
    </div>
  );
}