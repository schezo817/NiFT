import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <Link href={"/DashBoard"}>
                            <li><a>DashBoard</a></li>
                        </Link>
                        <li tabindex="0">
                            <a>
                            MarketPlace
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" bg><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul className="p-2 bg-white">
                            <Link href = {"/SeeNiFTs"}>
                                <li><a>See NiFTs</a></li>
                            </Link>
                            <Link href = {"/CreateNiFTs"}>
                                <li><a>Create NiFTs</a></li>
                            </Link>
                            </ul>
                        </li>
                        <Link href={"/AboutUS"}>
                            <li><a>AboutUS</a></li>
                        </Link>
                    </ul>
                </div>
                <Link href = {"/"}>
                    <a className="btn btn-ghost normal-case text-xl">NiFT</a>
                </Link>
            </div>
            <div className="navbar-end justify-self-auto">
                    <ul className="menu menu-horizontal p-0 hidden lg:flex">
                        <Link href={"/DashBoard"}>
                            <li><a>DashBoard</a></li>
                        </Link>
                        <li tabindex="0">
                            <a>
                            MarketPlace
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" bg><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul className="p-2 bg-white">
                            <Link href = {"/SeeNiFTs"}>
                                <li><a>See NiFTs</a></li>
                            </Link>
                            <Link href = {"/CreateNiFTs"}>
                                <li><a>Create NiFTs</a></li>
                            </Link>
                            </ul>
                        </li>
                        <Link href={"/AboutUS"}>
                            <li><a>AboutUS</a></li>
                        </Link>
                    </ul>
                    <Link href = {"/login"}>
                        <a className="btn">Log IN</a>
                    </Link>
                </div>
        </div>
    );
};

export default Navbar;
