import { NextPage } from "next";
import Link from "next/link";
import NFTCard from "../../components/NFTCard";

const MarketPlace: NextPage = () => {
    return (
        <div>
            {/* 保持している・していたNFTの情報 */}
            <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
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
