import { NextPage } from "next";
import Link from "next/link";

const Create: NextPage = () => {
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
                    <Link href={"/marketplace/see"}>
                        <li>
                            <a>See</a>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Create;
