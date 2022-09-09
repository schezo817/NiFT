import { NextPage } from "next";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import { BsInfoCircle, BsPatchCheck } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { apiClient } from "lib/apiClient";
import { User } from ".prisma/client";

export const UserEdit: NextPage = () => {
    const router = useRouter();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/");
        }
    });

    const [user, setUser] = useState<User>();
    const [userName, setUserName] = useState<string>("名称未設定");
    // metamask接続時にはここの初期値を外す事
    const [walletAddress, setWalletAddress] = useState<string>("0x000000000");

    useEffect(() => {
        const exec = async () => {
            const session = await getSession();

            if (session) {
                const userResponse = await apiClient.user.$get({
                    query: {
                        id: session?.id
                    }
                })
                if (userResponse.status === "success") {
                    setUser(userResponse.data as User);
                } else {
                    console.error("Something went wrong")
                }
            }
        }

        exec();
    }, []);

    // ページがリロードなどされた際、ユーザー名とウォレットアドレスについてはUserAPIから取得したものを使用する
    useEffect(() => {
        if (user) {
            setUserName(user?.user_name as string);
            setWalletAddress(user?.wallet_address as string);
        }
    }, [user]);

    const handleUserNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const postUserUpdate = async () => {
        try {
            const userResponse = await apiClient.user.$post({
                body: {
                    id: user?.id as string,
                    user_name: userName,
                    wallet_address: walletAddress
                }
            });
            console.log(userResponse);
            if (userResponse.status === "success") {
                // 保存が正常に完了したらdashboardに戻る
                router.push("/dashboard");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="p-4">
            <h1 className="px-8 text-3xl font-bold">ユーザ情報</h1>
            <div className="flex flex-row flex-wrap justify-center gap-4 p-4 w-full">
                <div className="avatar px-8">
                    <div className="w-48 h-48 rounded-full">
                        <img src={user?.image ?? ""} alt={"user-icon"} />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-4 p-4 w-96 max-w-full break-all">
                    <p className="text-4xl font-bold">{user?.user_name}</p>
                    <div className="flex items-center">
                        {user?.wallet_address ? (
                            <>
                                <BsPatchCheck className="text-2xl mr-2" />
                                <span>Wallet is connected</span>
                            </>
                        ) : (
                            <>
                                <BsInfoCircle className="text-2xl mr-2" />
                                <span>Wallet is Disconnected</span>
                            </>
                        )}
                    </div>
                    <p>{user?.wallet_address}</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 container max-w-2xl mx-auto">
                <h3 className="font-bold text-2xl text-center">編集</h3>
                <div className="flex flex-row items-center justify-between">
                    <h4 className="font-bold text-xl">ユーザ名</h4>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleUserNameInput}
                        className="input input-bordered max-w-xs"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <h4 className="font-bold text-xl">Google アカウント</h4>
                        <kbd className="kbd text-sm">
                            {user?.email ?? ""}
                        </kbd>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <h4 className="font-bold text-xl">Wallet アドレス</h4>
                        <button className="btn btn-secondary">{user?.wallet_address ? "再" : ""}接続する</button>
                    </div>
                    <div className="p-4">
                        {
                            user?.wallet_address ? (
                                <kbd className="kbd text-sm">{user?.wallet_address}</kbd>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                </div>
                <div
                    className="btn w-full"
                    onClick={postUserUpdate}
                >
                    保存する
                </div>
            </div>
        </div>
    );
};

export default UserEdit;
