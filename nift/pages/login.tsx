import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login: NextPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    return (
        // Heroの作成
        <div className="bg-gradient-to-r from-indigo-800 to-pink-500">
            <div className="container mx-auto px-4">
                <div className="h-screen flex justify-center items-center">
                    <div className="card glass lg:card-side shadow-xl">
                        <figure>
                            <img
                                src="https://placeimg.com/400/400/arch"
                                alt="Login Image"
                                className="object-cover w-full max-h-60 sm:max-h-96"
                            />
                        </figure>
                        <div className="card-body max-w-96">
                            <h2 className="card-title text-5xl text-white">Start and get NiFT!</h2>
                            <p className="py-2 text-white">NiFT | NFT + gift</p>
                            <div className="card-actions w-full justify-center">
                                <button className="btn w-full my-2 btn-primary"
                                    onClick={() => { signIn("google") }}
                                >
                                    Googleでログイン
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
