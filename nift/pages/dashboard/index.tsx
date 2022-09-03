import Board from "components/Board";
import { NextPage } from "next";
import Link from "next/link";

const Dashboard: NextPage = () => {
    return (
        <div>
<<<<<<< HEAD
            <Board />
=======
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
>>>>>>> edb92530546b00f7d9212547045307a230cf69be
        </div>
    );
};

export default Dashboard;
