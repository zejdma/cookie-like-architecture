import React from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  return <h1 className="font-bold text-3xl pb-2">{children}</h1>;
}