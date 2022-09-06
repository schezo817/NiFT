import { NextPage } from "next";
import NFTCard from "../../components/NFTCard";

const MarketPlace: NextPage = () => {
    return (
        <div>
            {/* Top画像 */}
            <div className="min-w-fit min-h-fit">
                <img src="https://placeimg.com/800/200/arch" className="w-screen object-cover" />
            </div>
            {/* icon画像 */}
            <div className="w-1/12 -translate-y-12 translate-x-12 shadow-lg">
                <img src="https://placeimg.com/192/192/people" alt="icon" className=" rounded-lg"/>
            </div>
            
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
