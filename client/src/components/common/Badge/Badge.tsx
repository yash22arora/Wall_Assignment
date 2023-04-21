"use client";

import { useState } from "react";
import { IBadgeProps } from "./types";

export const Badge: React.FC<IBadgeProps> = (props) => {
  const { variant = "primary", className, children } = props;
  const [badgeStyle, setBadgeStyle] = useState({
    background: "bg-wall-yellow-bg backdrop-blur-lg",
    text: "text-wall-yellow font-black text-xs",
    border: "",
  });
  return (
    <div
      className={`flex flex-row items-center justify-center rounded-[40px] ${badgeStyle.background} ${badgeStyle.text} ${badgeStyle.border} ${className}`}
    >
      {children}
    </div>
  );
};
