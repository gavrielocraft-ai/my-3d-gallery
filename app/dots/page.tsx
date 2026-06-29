"use client";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { useState } from "react";

export default function DotsPage() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div style={{ width: "100vw", height: "100vh", background: isDark ? "black" : "white", position: "relative", overflow: "hidden" }}>
      <DottedSurface isDark={isDark} />

      {/* Gradient glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: isDark
          ? "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 60%)"
          : "radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* Title */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
        <h1 style={{ color: isDark ? "white" : "black", fontFamily: "monospace", fontSize: "2.5rem", fontWeight: 600 }}>
          Dotted Surface
        </h1>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          position: "absolute", top: "1rem", right: "1rem", zIndex: 20,
          padding: "0.5rem 1rem", borderRadius: "999px", border: "1px solid",
          background: isDark ? "white" : "black",
          color: isDark ? "black" : "white",
          fontWeight: "bold", cursor: "pointer", fontSize: "0.875rem"
        }}
      >
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}