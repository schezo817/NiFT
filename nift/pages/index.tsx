import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">NiFT | a gift with NFT</h1>
          <p className="py-6"> Buy and sell NFT gifts.</p>
          <Link href={"/SeeNiFTs"}>
            <button className="btn btn-primary">
              Go MarketPlace
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Home;
