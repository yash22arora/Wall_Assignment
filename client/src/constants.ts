import { ICommunity } from "./components/Profile/Communities/types";
import comm1 from "./assets/media/comm1.png";
import comm2 from "./assets/media/comm2.png";
import comm3 from "./assets/media/comm3.png";
import comm4 from "./assets/media/comm4.png";
import { ITag } from "./components/Profile/Tags/types";

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
