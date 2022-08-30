import { NextPage } from "next";
import Link from "next/link";

const MarketPlace: NextPage = () => {
    return (
        <div className="">
            <div className="text-sm breadcrumbs">
                <ul>
                    <Link href ={"/"}>
                        <li><a>Home</a></li> 
                    </Link>
                    <Link href ={"/marketplace"}>
                        <li><a>MarketPlace</a></li> 
                    </Link>
                </ul>
            </div>

            <div className="btn-group">
                <Link href={"/marketplace/see"}>
                    <button className="btn">
                        SeeNiFTs
                    </button>
                </Link>
                <Link href={"/marketplace/create"}>
                    <button className="btn">
                        CreateNiFTs
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MarketPlace;