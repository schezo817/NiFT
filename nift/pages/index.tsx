import About from "components/About";
import Footer from "components/Footer";
import History from "components/History"
import Navbar from "components/Navbar";
import Welcome from "components/Welcome";
import Works from "components/Works";
import Meta from "components/_common/MetaData";

import { NextPage } from "next";

const Home: NextPage = () => {
    return  (
      <div>
        <Meta pageTitle="a gift with NFT" pageUrl="" pageOgImage={"https://www.nakaatsu.com/images/og_image.png"}/>
        <div className = 'bg-gradient-to-br from-lime-600 via-teal-100 to-cyan-300'>
          <Navbar />
          <Welcome />
          <About />
          <Works />
          <History />
          <Footer />
        </div>
      </div>
    )
  }

export default Home