import { StaticImageData } from "next/image";

export interface ICommunitiesProps {
  communities: ICommunity[];
}

export interface ICommunity {
  id: string;
  name: string;
  image: string | StaticImageData;
}
