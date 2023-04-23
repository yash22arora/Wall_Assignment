import { StaticImageData } from "next/image";

export interface IAchievement {
  img: string | StaticImageData;
  title: string;
  status: string;
  objectName: string;
  date: string;
  eth: number;
  xpEarned: number;
}

export interface IAchievementProps {
  achievement: IAchievement;
  color: string;
}

export interface IAchievementsProps {
  achievements: IAchievement[];
}

export type TAchievementColor = "wall-blue" | "wall-yellow" | "wall-green";
