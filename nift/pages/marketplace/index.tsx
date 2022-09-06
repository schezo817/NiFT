import { NextPage } from "next";
import NFTCard from "components/NFTCard";

const MarketPlace: NextPage = () => {
    return (
        <div>
            {/* 保持している or していたNFTの情報 */}
            <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
            </div>
        </div>
    );
};

export default MarketPlace;
