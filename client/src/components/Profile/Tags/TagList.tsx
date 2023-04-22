import { Badge } from "@/components/common/Badge/Badge";
import { ITagListProps } from "./types";

export const TagList: React.FC<ITagListProps> = (props) => {
  const { tags } = props;
  return (
    <div className="flex flex-row flex-wrap w-full gap-2">
      {tags.map((tag, idx) => {
        return (
          <Badge
            key={tag.id}
            variant={idx < 2 ? "secondary" : "tertiary"}
            className="py-[6px] px-[10px] gap-2"
          >
            <span>{tag.name}</span>
            <span>{tag.percent}%</span>
          </Badge>
        );
      })}
    </div>
  );
};
