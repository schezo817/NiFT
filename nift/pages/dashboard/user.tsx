import { NextPage } from "next";
import { BsPatchCheck } from "react-icons/bs";

export const User = () => {
    return (
        <div className="p-4">
            <h1 className="px-8 text-3xl font-bold">ユーザ情報</h1>
            <div className="flex flex-row flex-wrap justify-center gap-4 p-4 w-full">
                <div className="avatar px-8">
                    <div className="w-48 h-48 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt={"user-icon"} />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-4 p-4 w-96 max-w-full break-all">
                    <p className="text-4xl font-bold">NiFT Official</p>
                    <div className="flex items-center">
                        <BsPatchCheck className="text-2xl mr-2" />
                        <span>Wallet is connected</span>
                    </div>
                    <p>0x9edd29d64b3bcd5378b18ee59fc66e90</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 container max-w-2xl mx-auto">
                <h3 className="font-bold text-2xl text-center">編集</h3>
                <div className="flex flex-row items-center justify-between">
                    <h4 className="font-bold text-xl">ユーザ名</h4>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered max-w-xs"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <h4 className="font-bold text-xl">Google アカウント</h4>
                        <button className="btn btn-secondary">再接続</button>
                    </div>
                    <div className="p-4">
                        <kbd className="kbd text-sm">nift-official@gmail.com</kbd>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <h4 className="font-bold text-xl">Wallet アドレス</h4>
                        <button className="btn btn-secondary">再接続</button>
                    </div>
                    <div className="p-4">
                        <kbd className="kbd text-sm">0x6a757c4f44198a20aac95dd77460c824</kbd>
                    </div>
                </div>
                <div
                    className="btn w-full"
                    onClick={() => {
                        console.log("Save Accounts");
                    }}
                >
                    保存する
                </div>
            </div>
        </div>
    );
};

export default User;
