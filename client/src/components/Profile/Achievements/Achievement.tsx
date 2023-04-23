import { Slate } from "@/components/common/Slate/Slate";
import { IAchievementProps } from "./types";

export const Achievement: React.FC<IAchievementProps> = (props) => {
  const { achievement, color } = props;
  return (
    <Slate className={`p-4 pb-6 w-1/4 flex flex-col rounded-2xl`}>
      <div className="flex flex-row items-center"></div>
    </Slate>
  );
};
