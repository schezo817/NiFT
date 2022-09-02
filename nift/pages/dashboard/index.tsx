import Board from "components/Board";
import { NextPage } from "next";
import Link from "next/link";

const Dashboard: NextPage = () => {
    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <Link href={"/"}>
                        <li>
                            <a>Home</a>
                        </li>
                    </Link>
                    <Link href={"/dashboard"}>
                        <li>
                            <a>DashBoard</a>
                        </li>
                    </Link>
                </ul>
            </div>
            <Board />
        </div>
    );
};

export default Dashboard;
