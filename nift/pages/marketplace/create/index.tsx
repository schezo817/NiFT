import { NextPage } from "next";
import Link from "next/link";
import CreateNFT from "../../../components/CreateNFT";

const Create: NextPage = () => {
    return (
        <div>
<<<<<<< HEAD
=======
            {/* breadcrumbsの作成 */}
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
                    <Link href={"/marketplace/create"}>
                        <li>
                            <a>Create</a>
                        </li>
                    </Link>
                </ul>
            </div>

>>>>>>> edb92530546b00f7d9212547045307a230cf69be
            <CreateNFT />
        </div>
    );
};

export default Create;
