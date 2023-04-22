import { Slate } from "@/components/common/Slate/Slate";
import { Hanken_Grotesk } from "next/font/google";
import pfp from "../assets/media/pfp.png";
import { Avatar } from "@/components/common/Avatar/Avatar";
import { BsTwitter } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { CommonCommunities } from "@/components/Profile/Communities/CommonCommunities";
import { COMMON_COMMUNITIES, TAGS } from "@/constants";
import { TagList } from "@/components/Profile/Tags/TagList";

const font = Hanken_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${font.className} flex min-h-screen flex-row items-start justify-start p-6 gap-6 text-secondary-text `}
    >
      <Slate className="p-4 pb-6 w-1/4 flex flex-col">
        <div className="flex flex-row items-center justify-start gap-4 mb-8">
          <Avatar
            currentLevel={2}
            src={pfp}
            currentPoints={1200}
            nextLevelPoints={1400}
            showLevel={true}
          />
          <div className="flex flex-col items-start gap-0.5">
            <h1 className="text-xl text-white leading-8 font-medium">
              dingaling.eth
            </h1>
            <span className="text-sm leading-4 font-normal">
              0xadgf....jkld
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-4">
          <span className="flex flex-row items-center gap-2 py-1 px-3 bg-secondary-bg rounded-3xl">
            <BsTwitter className="text-[#1D9BF0] text-xl" />
            <span>@dingalingts</span>
          </span>
          <span className="p-1 bg-secondary-bg rounded-full">
            <FiGlobe className="text-2xl text-secondary-text" />
          </span>
        </div>
        <p className="text-secondary-text my-8">
          An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and
          owner of 📦 @nftboxes
        </p>
        <CommonCommunities communities={COMMON_COMMUNITIES} />
        <div className="my-8">
          <TagList tags={TAGS} />
        </div>
      </Slate>
    </main>
  );
}
