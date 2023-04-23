import { HTMLAttributes } from "react";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: TButtonType;
}

type TButtonType = "primary";
