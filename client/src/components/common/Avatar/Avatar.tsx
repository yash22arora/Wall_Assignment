"use client";
import Image from "next/image";
import { IAvatarProps } from "./types";
import { Badge } from "../Badge/Badge";
import { DonutChart } from "react-circle-chart";

export const Avatar: React.FC<IAvatarProps> = (props) => {
  const {
    currentLevel,
    currentPoints,
    nextLevelPoints,
    showLevel = true,
    src,
  } = props;
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative progressBarAvatar">
        <div className="rotate-180">
          <DonutChart
            items={[
              {
                value: (currentPoints / nextLevelPoints) * 100,
                label: "",
                color: "#FFC148",
              },
            ]}
            size={94}
            trackColor="#F8A9101A"
            showTotal={false}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full overflow-hidden">
          <Image src={src} alt="pfp" layout="fill" objectFit="cover" />
        </div>
      </div>
      {showLevel && <Badge className="p-2 px-3">LVL {currentLevel}</Badge>}
    </div>
  );
};
