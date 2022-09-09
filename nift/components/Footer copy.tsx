import { Session } from "inspector";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const ( data: session, status ) = useSession();

    return (
        <></>
    )
};

export default Footer;
