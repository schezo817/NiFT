import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
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
                        <li tabIndex={0}>
                            <Link href={"/marketplace"}>
                                <a>
                                    <span>MarketPlace</span>
                                    <HiChevronDown className="text-xl" />
                                </a>
                            </Link>
                            <ul className="ml-2 p-2 bg-white dark:bg-base-100">

                                <Link href={"/marketplace/create"}>
                                    <li>
                                        <a>Create NiFTs</a>
                                    </li>
                                </Link>
                            </ul>
                        </li>
                        <Link href={"/dashboard"}>
                            <li>
                                <a>
                                    <MdOutlineHome className="text-xl" />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                        </Link>
                        <Link href={"/about"}>
                            <li>
                                <a>
                                    <MdOutlineInfo className="text-xl" />
                                    <span>About</span>
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
                    <li tabIndex={0}>
                        <Link href={"/marketplace"}>
                            <a>
                                <span>MarketPlace</span>
                                <HiChevronDown className="text-xl" />
                            </a>
                        </Link>
                        <ul className="p-2 bg-white">

                            <Link href={"/marketplace/create"}>
                                <li>
                                    <a>Create NiFTs</a>
                                </li>
                            </Link>
                        </ul>
                    </li>
                    <Link href={"/dashboard"}>
                        <li>
                            <a>
                                <MdOutlineHome className="text-xl" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                    </Link>
                    <Link href={"/about"}>
                        <li>
                            <a>
                                <MdOutlineInfo className="text-xl" />
                                <span>About</span>
                            </a>
                        </li>
                    </Link>
                </ul>
                {/* <div className="btn-group"> */}
                <Link href={"/login"}>
                    <button className="btn">
                        <MdLogin className="text-xl" />
                        <span className="pl-2">login</span>
                    </button>
                </Link>
                <Link href={"/get"}>
                    <button className="btn">Get NiFTs</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
