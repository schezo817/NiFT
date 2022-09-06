import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer p-8 bg-base-200 text-base-content max-w-full ">
            <div></div>
            <div>
                <span className="footer-title">Service</span>
                <Link href={"/marketplace"}>
                    <a className="link link-hover">MarketPlace</a>
                </Link>
                <Link href={"/dashboard"}>
                    <a className="link link-hover">DashBoard</a>
                </Link>
            </div>

            <div>
                <span className="footer-title">Home</span>
                <Link href={"/about"}>
                    <a className="link link-hover">About</a>
                </Link>
                <Link href={"/login"}>
                    <a className="link link-hover">Login</a>
                </Link>
            </div>

            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>

            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a>
                        <FaGithub className="text-2xl" />
                    </a>
                </div>
                <p>Copyright © 2022 - All right reserved by NiFT Project</p>
            </div>
        </div>
    );
};

export default Footer;
