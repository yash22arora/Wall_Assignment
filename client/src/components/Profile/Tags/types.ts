export interface ITagListProps {
  tags: ITag[];
}

export interface ITag {
  id: string;
  name: string;
  percent: number;
}
