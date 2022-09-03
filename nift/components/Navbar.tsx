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
                                <Link href={"/marketplace/see"}>
                                    <li>
                                        <a>See NiFTs</a>
                                    </li>
                                </Link>
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
                            <Link href={"/marketplace/see"}>
                                <li>
                                    <a>See NiFTs</a>
                                </li>
                            </Link>
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

            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <Link href={"/dashboard"}>
                        <li>
                            <a className="justify-between">
                                DashBoard
                            </a>
                        </li>
                    </Link>
                    <label htmlFor="my-modal" className="btn btn-sm modal-button">
                        Logout
                    </label>
                </ul>
            </div>

            {/* <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Deactivate</button>
                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Navbar;
