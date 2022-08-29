import Link from "next/link";

const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full">
            <div id="Footer" className="bg-slate-800 py-8 px-6 flex justify-center">
                <div className="text-sm">
                    <Link href="/" className="link text-white">
                        <span className="link text-white">nift.tk</span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Footer;
