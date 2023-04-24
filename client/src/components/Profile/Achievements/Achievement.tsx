import { Slate } from "@/components/common/Slate/Slate";
import { IAchievementProps } from "./types";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";

export const Achievement: React.FC<IAchievementProps> = (props) => {
  const { achievement, color } = props;
  const textColor = "text-" + color;
  const blurColor = "bg-" + color;
  return (
    <Slate
      className={`p-2.5 flex flex-col rounded-2xl w-[201px] relative overflow-hidden achievementContainer`}
    >
      <div
        className={`absolute w-[174px] h-[174px] rounded-full blur-xl bg-opacity-10 transition-all ${blurColor} achievementBlur`}
      ></div>
      <div className="flex flex-row items-center w-full text-ellipsis gap-3 h-[52px]">
        <Image
          src={achievement.img}
          alt={achievement.objectName}
          key={achievement.objectName}
          className="rounded-lg h-full aspect-square"
        />
        <div className="flex flex-col justify-between items-start text-ellipsis h-full">
          <span className="text-primary-text text-sm leading-5 w-max">
            {achievement.title}
          </span>
          <span className={`text-xs font-normal py-1 px-2 ${textColor}`}>
            {achievement.status}
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-5">
        <span
          className={`text-xs py-1 pl-2 text-secondary-text font-medium leading-5`}
        >
          {achievement.objectName}
        </span>
        <span
          className={`text-xs py-1 px-2 text-primary-text font-medium leading-5 flex flex-row gap-1 items-center`}
        >
          {achievement.eth}
          <FaEthereum />
        </span>
      </div>
      <div className="flex flex-row justify-between items-center mt-1">
        <span
          className={`text-xs py-1 px-2 text-secondary-text font-normal leading-5`}
        >
          {achievement.date}
        </span>
        <span
          className={`text-xs py-1 px-2 text-wall-success font-medium leading-5 flex flex-row gap-1 items-center`}
        >
          +{achievement.xpEarned}XP
        </span>
      </div>
    </Slate>
  );
};
