import { Achievement } from "./Achievement";
import { IAchievementsProps, TAchievementColor } from "./types";

export const AchievementList: React.FC<IAchievementsProps> = (props) => {
  const colors: TAchievementColor[] = [
    "wall-blue",
    "wall-yellow",
    "wall-green",
    "wall-blue",
    "wall-green",
  ];
  const { achievements } = props;
  return (
    <div className="flex flex-row items-center overflow-x-scroll gap-4 w-max pb-4">
      <span className="text-wall-blue bg-wall-blue hidden" />
      <span className="text-wall-green bg-wall-green hidden" />
      <span className="text-wall-yellow bg-wall-yellow hidden" />
      {achievements.map((achievement, idx) => {
        return (
          <Achievement
            key={idx}
            achievement={achievement}
            color={colors[idx]}
          />
        );
      })}
    </div>
  );
};
