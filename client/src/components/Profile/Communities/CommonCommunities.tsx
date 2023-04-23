import Image from "next/image";
import { ICommunitiesProps } from "./types";

export const CommonCommunities: React.FC<ICommunitiesProps> = (props) => {
  const { communities } = props;
  return (
    <div className="flex flex-col w-full">
      <span className="text-sm mb-2">
        Common communties ({communities.length})
      </span>
      <div className="flex flex-row items-center gap-2">
        {communities.map((community) => {
          return (
            <Image
              src={community.image}
              alt={community.name}
              key={community.id}
              width={48}
              height={48}
              className="rounded-lg"
            />
          );
        })}
      </div>
    </div>
  );
};
