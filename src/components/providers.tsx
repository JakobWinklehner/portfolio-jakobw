"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
