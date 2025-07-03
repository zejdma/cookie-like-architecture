import React from "react";

export default function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <p className="text-red-500 min-h-8">{children}</p>;
}