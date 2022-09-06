import { NextPage } from "next";

const Login: NextPage = () => {
    return (
        // Heroの作成
        <div className="container mx-auto px-4">
            <div className="h-screen flex justify-center items-center">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://placeimg.com/400/400/arch"
                            className="object-cover w-full max-h-60 sm:max-h-96"
                        />
                    </figure>
                    <div className="card-body max-w-96">
                        <h2 className="card-title text-5xl">Start and get NiFT!</h2>
                        <p className="py-2">NiFT | NFT + gift</p>
                        <div className="card-actions w-full justify-center">
                            <button className="btn w-full my-2 btn-primary">
                                Googleでログイン
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
