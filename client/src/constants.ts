import { ICommunity } from "./components/Profile/Communities/types";
import comm1 from "./assets/media/comm1.png";
import comm2 from "./assets/media/comm2.png";
import comm3 from "./assets/media/comm3.png";
import comm4 from "./assets/media/comm4.png";
import { ITag } from "./components/Profile/Tags/types";
import { IAchievement } from "./components/Profile/Achievements/types";
import ach1 from "./assets/media/badge1.png";
import ach2 from "./assets/media/badge2.png";
import ach3 from "./assets/media/badge3.png";
import ach4 from "./assets/media/badge4.png";
import ach5 from "./assets/media/badge5.png";
import { INFT } from "./components/Profile/NFTs/types";
import nft1 from "./assets/media/nft1.png";
import nft2 from "./assets/media/nft2.png";
import nft3 from "./assets/media/nft3.png";
import nft4 from "./assets/media/nft4.png";
import nft5 from "./assets/media/nft5.png";

export const COMMON_COMMUNITIES: ICommunity[] = [
  {
    id: "1",
    name: "NinjaGirl",
    image: comm1,
  },
  {
    id: "2",
    name: "UnicornBoy",
    image: comm2,
  },
  {
    id: "3",
    name: "BoredApeClub",
    image: comm3,
  },
  {
    id: "4",
    name: "CryptoPunks",
    image: comm4,
  },
];

export const TAGS: ITag[] = [
  {
    id: "1",
    name: "Art",
    percent: 12,
  },
  {
    id: "2",
    name: "Utility",
    percent: 12,
  },
  {
    id: "3",
    name: "PFP",
    percent: 12,
  },
  {
    id: "4",
    name: "Metaverse",
    percent: 12,
  },
  {
    id: "5",
    name: "Gaming",
    percent: 12,
  },
  {
    id: "6",
    name: "PFP",
    percent: 12,
  },
  {
    id: "7",
    name: "ens",
    percent: 12,
  },
];

export const ACHIEVEMENTS: IAchievement[] = [
  {
    title: "ENS Linked",
    img: ach1,
    status: "ENS Linked",
    objectName: "dingaling.eth",
    eth: 1.82,
    xpEarned: 200,
    date: "22-03-2023",
  },
  {
    title: "Best Flip",
    img: ach2,
    status: "Sold",
    objectName: "CryptoPunk #2131",
    eth: 98.5,
    xpEarned: 150,
    date: "13-04-2023",
  },
  {
    title: "Should have sold",
    img: ach3,
    status: "Mint",
    objectName: "Rare Apepe #6974",
    eth: 98.5,
    xpEarned: 200,
    date: "14-03-2023",
  },
  {
    title: "First NFT bought",
    img: ach4,
    status: "Bought",
    objectName: "BAYC #7925",
    eth: 98.5,
    xpEarned: 10,
    date: "14-03-2023",
  },
  {
    title: "Paper Handed",
    img: ach5,
    status: "Sold",
    objectName: "Moonbird #7866",
    eth: 98.5,
    xpEarned: 200,
    date: "13-04-2023",
  },
];

export const NFTS: INFT[] = [
  {
    img: nft1,
    title: "Azuki #9839",
    floorEth: 12.74,
    boughtEth: 2.82,
    percentIncrease: 21.6,
    date: "3 Months",
  },
  {
    img: nft2,
    title: "MAYC #9839",
    floorEth: 12.74,
    boughtEth: 2.82,
    percentIncrease: 21.6,
    date: "3 Months",
  },
  {
    img: nft3,
    title: "MoonBirds #9839",
    floorEth: 12.74,
    boughtEth: 2.82,
    percentIncrease: 21.6,
    date: "3 Months",
  },
  {
    img: nft4,
    title: "Otherdeed #9839",
    floorEth: 12.74,
    boughtEth: 2.82,
    percentIncrease: 21.6,
    date: "3 Months",
  },
  {
    img: nft5,
    title: "Cryptoz #9839",
    floorEth: 12.74,
    boughtEth: 2.82,
    percentIncrease: 21.6,
    date: "3 Months",
  },
];
