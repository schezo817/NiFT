import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import {AiOutlineGift} from "react-icons/ai";
import { MdLogin, MdOutlineHome, MdOutlineInfo, MdMenu } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 fixed z-50">
            <div className="navbar-start">
                <div className="dropdown z-0">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <MdMenu className="text-2xl" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
                    >
                        <Link href={"/marketplace"}>
                            <li>
                                <a>
                                    <div className="text-xl" />
                                    <span>MarketPlace</span>
                                </a>
                            </li>
                        </Link>
                        <Link href={"/dashboard"}>
                            <li>
                                <a>
                                    <MdOutlineHome   className="text-xl" />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                        </Link>
                    </ul>
                </div>
                <Link href={"/"}>
                    <a className="btn btn-ghost normal-case text-xl">NiFT</a>
                </Link>
            </div>

            <div className="navbar-end justify-self-auto gap-x-2">
                <ul className="menu menu-horizontal p-0 hidden lg:flex">
                    <Link href={"/marketplace"}>
                        <li>
                            <a>
                                <MdOutlineHome className="text-xl" />
                                <span>MarletPlace</span>
                            </a>
                        </li>
                    </Link>
                    <li tabIndex={0}>
                        <Link href={"/dashboard"}>
                            <a>
                                <MdOutlineHome className="text-xl" />
                                <span>DashBoard</span>
                                <HiChevronDown className="text-xl" />
                            </a>
                        </Link>
                        <ul className="p-2 bg-white">

                            <Link href={"/dashboard/nft/create"}>
                                <li>
                                    <a>Create NiFTs</a>
                                </li>
                            </Link>
                        </ul>
                    </li>
                </ul>

                {/* ボタン */}
                <Link href={"/login"}>
                    <button className="btn items-center btn-primary">
                        <MdLogin className="text-xl" />
                        <span className="hidden sm:inline-block pl-2">LogIn</span>
                    </button>
                </Link>
                <Link href={"/get"}>
                    <button className="btn items-center btn-primary">
                        <AiOutlineGift className="text-xl" />
                        <span className="hidden sm:inline-block pl-2">GET NiFT</span>
                    </button>
                </Link>
            </div>

            <div className="dropdown dropdown-end ml-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <Link href={"/dashboard"}>
                        <li>
                            <a className="justify-between">DashBoard</a>
                        </li>
                    </Link>
                    <label htmlFor="my-modal" className="btn btn-sm modal-button">
                        Logout
                    </label>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
