import { NFT } from "./NFT";
import { INFTListProps } from "./types";

export const NFTList: React.FC<INFTListProps> = (props) => {
  const { nfts } = props;
  return (
    <div className="flex flex-row items-center overflow-x-scroll gap-4 w-max pb-4">
      {nfts.map((nft, idx) => {
        return <NFT key={idx} nft={nft} />;
      })}
    </div>
  );
};
