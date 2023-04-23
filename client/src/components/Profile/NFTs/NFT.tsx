import { Slate } from "@/components/common/Slate/Slate";
import { INFTProps } from "./types";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";

export const NFT: React.FC<INFTProps> = (props) => {
  const { nft } = props;
  return (
    <Slate
      className={`p-1 pb-2 flex flex-col rounded-lg w-[201px] cursor-pointer hover:scale-[1.02] duration-400 transition-all`}
    >
      <div className="relative">
        <Image
          width={201}
          height={201}
          src={nft.img}
          alt={nft.title}
          key={nft.title}
          className="rounded-lg h-full aspect-square"
        />
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 rounded-full backdrop-blur-sm px-1.5 leading-5 text-xs font-medium text-primary-text">
          {nft.date}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-5">
        <span
          className={`text-xs py-1 px-2 text-secondary-text font-medium leading-5`}
        >
          Bought
        </span>
        <span
          className={`text-xs py-1 px-2 text-primary-text font-medium leading-5 flex flex-row gap-1 items-center`}
        >
          {nft.boughtEth}
          <FaEthereum />
        </span>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span
          className={`text-xs py-1 px-2 text-secondary-text font-normal leading-5`}
        >
          Floor
        </span>
        <span
          className={`text-xs py-1 px-2 text-primary-text font-medium leading-5 flex flex-row gap-1 items-center`}
        >
          {nft.floorEth}
          <FaEthereum />
          <span
            className={`text-xs py-1 px-2 text-wall-success font-medium leading-5 flex flex-row gap-1 items-center`}
          >
            +{nft.percentIncrease}%
          </span>
        </span>
      </div>
    </Slate>
  );
};
