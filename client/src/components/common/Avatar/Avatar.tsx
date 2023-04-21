import Image from "next/image";
import { IAvatarProps } from "./types";
import { Badge } from "../Badge/Badge";

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
      {/* make circular progress bar around image */}

      <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden">
        <Image src={src} alt="pfp" layout="fill" objectFit="cover" />
      </div>
      {showLevel && <Badge className="p-2 px-3">LVL {currentLevel}</Badge>}
    </div>
  );
};
