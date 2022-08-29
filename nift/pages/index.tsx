import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
        <div className="bg-gradient-to-br">
            <Link href={"/login"}>
                Login
            </Link>
            <div>
                <textarea className="textarea textarea-primary" placeholder="Bio"></textarea>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Remember me</span> 
                    <input type="checkbox" checked="checked" className="checkbox" />
                </label>
            </div>
        </div>
    );
};

export default Home;
