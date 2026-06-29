"use client";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function DotsPage() {
  return (
    <div className="relative w-full h-screen bg-black">
      <DottedSurface />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-mono text-4xl font-semibold text-white z-10">
          Dotted Surface
        </h1>
      </div>
    </div>
  );
}