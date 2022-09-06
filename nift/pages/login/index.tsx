import { NextPage } from "next";

const Login: NextPage = () => {
    return (
        // Heroの作成
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-800 to-pink-500">
            {/* Heroのコンテンツの説明 */}
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Heroの中では、テキストを中央揃えする。 */}
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white">Start and get NiFT!</h1>
                </div>

                {/* logincardの実装 */}
                <div className="card glass flex-shrink-0 w-full max-w-sm shadow-2xl">
                    {/* １つのセットには、<label>と<input>が要素として入る。 */}
                    <div className="card-body">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        {/* buttonの実装 */}
                        <div className="form-control mt-6 justify-items-center">
                            <button className="btn btn-primary shadow-lg shadow-cyan-500/50">Log in</button>
                            <div className="text-center ">
                                <span className="label-text text-white">
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
