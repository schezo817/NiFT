import { NextPage } from "next";

const Login: NextPage = () => {
    return (
        // Heroの作成
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left p-4">
                    <h1 className="text-5xl font-bold">Start and get NiFT!</h1>
                    <p className="py-10">Start NiFT | NFT + gift</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100 p-4">
                    <div className="card-body">
                        <div className="form-control mt-6 justify-items-center">
                            <button className="btn btn-primary shadow-lg shadow-cyan-500/50">Log in</button>
                            <div className="text-center">
                                <span className="label-text">
                                    let&apos;s create Account and get NFT!
                                </span>
                            </div>
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
