import { NextPage } from "next";
import { BaseLayout, Footer } from "../src/index";

const Home: NextPage = () => {
  return (
    <>
      <BaseLayout>
        <Footer />
      </BaseLayout>
    </>
  )
}

export default Home;