import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Seo from "./_common/Seo";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Seo />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;