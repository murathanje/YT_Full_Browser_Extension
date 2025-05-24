"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  radius?: number;
  opacity?: number;
  className?: string;
}

export function DotPattern({
  size = 32,
  radius = 1.5,
  opacity = 1,
  className,
  ...props
}: DotPatternProps) {
  const opacityStyle = { opacity };
  
  return (
    <svg
      className={cn("absolute inset-0 h-full w-full stroke-red-500/20 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)] dark:stroke-red-400/10", className)}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={opacityStyle}
      {...props}
    >
      <defs>
        <pattern
          id="dot-pattern"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle cx={size / 2} cy={size / 2} r={radius} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
}
