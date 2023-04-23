"use client";

import { useState } from "react";
import { IButtonProps } from "./types";

export const Button: React.FC<IButtonProps> = (props) => {
  const { variant = "primary", children, className, ...rest } = props;
  const [buttonStyle, setButtonStyle] = useState({
    background: "",
    text: "text-primary-text text-sm leading-5",
    border: "border border-secondary-text",
  });
  return (
    <button
      {...rest}
      className={`text-center cursor-pointer ${buttonStyle.border} ${buttonStyle.background} ${buttonStyle.text} ${className}`}
    >
      {children}
    </button>
  );
};
