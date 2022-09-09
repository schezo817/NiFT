import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import { AiOutlineGift, AiOutlineShop } from "react-icons/ai";
import { MdLogin, MdOutlineHome, MdMenu } from "react-icons/md";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session, status } = useSession();

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
                                    <AiOutlineShop className="text-xl" />
                                    <span>MarketPlace</span>
                                </a>
                            </li>
                        </Link>
                        {status === "authenticated" ? (
                            <Link href={"/dashboard"}>
                                <li>
                                    <a>
                                        <MdOutlineHome className="text-xl" />
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                            </Link>
                        ) : (
                            <></>
                        )}
                    </ul>
                </div>
                <Link href={"/"}>
                    <a className="btn btn-ghost normal-case text-xl">NiFT</a>
                </Link>
            </div>

            <div className="navbar-end justify-self-auto gap-x-2">
                <ul className="menu menu-horizontal p-0 hidden lg:flex gap-x-2">
                    <Link href={"/marketplace"}>
                        <li>
                            <a className="aling-center">
                                <MdOutlineHome className="text-xl" />
                                <span>MarketPlace</span>
                            </a>
                        </li>
                    </Link>
                    {status === "authenticated" ? (
                        <li tabIndex={0}>
                            <Link href={"/dashboard"}>
                                <a className="align-center">
                                    <MdOutlineHome className="text-xl" />
                                    <span>DashBoard</span>
                                    <HiChevronDown className="text-xl" />
                                </a>
                            </Link>
                            <ul className="p-2 bg-white w-full">
                                <Link href={"/dashboard/nft/create"}>
                                    <li>
                                        <a>Create NiFTs</a>
                                    </li>
                                </Link>
                            </ul>
                        </li>
                    ) : (
                        <></>
                    )}
                </ul>

                {/* ボタン */}
                {status === "authenticated" ? (
                    <></>
                ) : (
                    <div
                        className="btn items-center btn-primary"
                        onClick={() => {
                            signIn("google");
                        }}
                    >
                        <MdLogin className="text-xl" />
                        <span className="hidden sm:inline-block pl-2">LogIn</span>
                    </div>
                )}
                <Link href={"/get"}>
                    <div className="btn items-center btn-primary">
                        <AiOutlineGift className="text-xl" />
                        <span className="hidden sm:inline-block pl-2">GET NiFT</span>
                    </div>
                </Link>
            </div>
            {status === "authenticated" ? (
                <div className="dropdown dropdown-end ml-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={session.user?.image ?? ""} />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <Link href={"/dashboard"}>
                            <li className="mb-2">
                                <a className="justify-between">DashBoard</a>
                            </li>
                        </Link>
                        <label htmlFor="logout-modal" className="btn btn-sm modal-button">
                            Logout
                        </label>
                    </ul>
                </div>
            ) : (
                <></>
            )}

            <input type="checkbox" id="logout-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="my-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">あなたはログアウトしようとしています</h3>
                    <div className="mt-3 btn btn-primary w-full" onClick={() => signOut()}>
                        ログアウト
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
