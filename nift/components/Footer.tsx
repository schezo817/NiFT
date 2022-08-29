import Link from "next/link";

const Footer = () => {
	return (
		<div id="Footer" className="bg-slate-800 py-8 px-6 flex justify-center">
			<div className="font-raleway text-sm">
				<Link href="/" className="link text-white">
					<span className="link text-white">nift.tk</span>
				</Link>
			</div>
		</div>
	)
}

export default Footer;