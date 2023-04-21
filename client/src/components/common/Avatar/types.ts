import { StaticImageData } from "next/image";

export interface IAvatarProps {
  showLevel?: boolean;
  currentLevel: number;
  currentPoints: number;
  nextLevelPoints: number;
  src: string | StaticImageData;
}
