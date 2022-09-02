import { NextPage } from "next";
import Link from "next/link";
import NFTCard from "../../components/NFTCard";

const MarketPlace: NextPage = () => {
    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <Link href={"/"}>
                        <li>
                            <a>Home</a>
                        </li>
                    </Link>
                    <Link href={"/marketplace"}>
                        <li>
                            <a>MarketPlace</a>
                        </li>
                    </Link>
                </ul>
            </div>
            <NFTCard />
        </div>
    );
};

export default MarketPlace;
