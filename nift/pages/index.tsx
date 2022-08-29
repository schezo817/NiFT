import About from "components/About";
import History from "components/History";
import Welcome from "components/Welcome";
import Works from "components/Works";

import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="bg-gradient-to-br from-lime-600 via-teal-100 to-cyan-300">
            <Welcome />
            <About />
            <Works />
            <History />
        </div>
    );
};

export default Home;
