import { NextPage } from "next";

const Login: NextPage = () => {
    return (
        // Heroの作成
        <div className="hero min-h-screen bg-base-0">
            {/* Heroのコンテンツの説明 */}
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Heroの中では、テキストを中央揃えする。 */}
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Start and get NiFT!</h1>
                    <p className="py-10">Start NiFT | NFT + gift</p>
                </div>

                {/* logincardの実装 */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* １つのセットには、<label>と<input>が要素として入る。 */}
                    <div className="card-body">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        {/* buttonの実装 */}
                        <div className="form-control mt-6 justify-items-center">
                            <button className="btn btn-primary">Log in</button>
                            <div className="text-center ">
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
