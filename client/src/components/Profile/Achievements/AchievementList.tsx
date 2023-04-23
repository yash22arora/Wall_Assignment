import { Achievement } from "./Achievement";
import { IAchievementsProps } from "./types";

export const AchievementList: React.FC<IAchievementsProps> = (props) => {
  const { achievements } = props;
  return (
    <div className="flex flex-row items-center overflow-x-scroll gap-4 w-max pb-4">
      {achievements.map((achievement, idx) => {
        return <Achievement key={idx} achievement={achievement} color={""} />;
      })}
    </div>
  );
};
