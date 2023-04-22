"use client";

import { useEffect, useState } from "react";
import { IBadgeProps } from "./types";

export const Badge: React.FC<IBadgeProps> = (props) => {
  const { variant = "primary", className, children } = props;
  const [badgeStyle, setBadgeStyle] = useState({
    background: "bg-wall-yellow-bg backdrop-blur-lg",
    text: "text-wall-yellow font-black ",
    border: "",
  });
  useEffect(() => {
    switch (variant) {
      case "primary":
        setBadgeStyle({
          background: "bg-wall-yellow-bg backdrop-blur-lg",
          text: "text-wall-yellow font-black",
          border: "",
        });
        break;
      case "secondary":
        setBadgeStyle({
          background: "",
          text: "text-wall-yellow font-medium",
          border: "border border-wall-yellow",
        });
        break;
      case "tertiary":
        setBadgeStyle({
          background: "",
          text: "text-secondary-text",
          border: "border border-secondary-bg",
        });
        break;
      default:
        setBadgeStyle({
          background: "bg-wall-yellow-bg backdrop-blur-lg",
          text: "text-wall-yellow font-black",
          border: "",
        });
    }
  }, [variant]);
  return (
    <div
      className={`flex flex-row items-center justify-center rounded-[40px] text-xs ${badgeStyle.background} ${badgeStyle.text} ${badgeStyle.border} ${className}`}
    >
      {children}
    </div>
  );
};
