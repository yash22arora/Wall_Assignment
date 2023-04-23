import { StaticImageData } from "next/image";

export interface INFT {
  img: string | StaticImageData;
  title: string;
  date: string;
  boughtEth: number;
  floorEth: number;
  percentIncrease: number;
}

export interface INFTProps {
  nft: INFT;
}

export interface INFTListProps {
  nfts: INFT[];
}
