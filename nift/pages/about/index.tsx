import { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <Link href ={"/"}>
                        <li><a>Home</a></li> 
                    </Link>
                    <Link href ={"/about"}>
                        <li><a>AboutUS</a></li> 
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default About;