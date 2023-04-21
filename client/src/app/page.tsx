import { Slate } from "@/components/common/Slate/Slate";
import { Hanken_Grotesk } from "next/font/google";
import Image from "next/image";
import pfp from "../assets/media/pfp.png";
import { Badge } from "@/components/common/Badge/Badge";
import { Avatar } from "@/components/common/Avatar/Avatar";

const font = Hanken_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${font.className} flex min-h-screen flex-row items-start justify-start p-6 gap-6 text-secondary-text `}
    >
      <Slate className="p-4 pb-6 w-1/4 flex flex-col">
        <div className="flex flex-row items-center justify-start gap-3 mb-8">
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
        <p className="text-secondary-text">
          An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and
          owner of 📦 @nftboxes
        </p>
      </Slate>
    </main>
  );
}
