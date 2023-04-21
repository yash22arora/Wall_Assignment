import { HTMLAttributes } from "react";

export interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TBadgeVariants;
}

type TBadgeVariants = "primary" | "secondary" | "tertiary" | "quaternary";
