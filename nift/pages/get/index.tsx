import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

let currentPinCodeIndex: number = 0;

const Get: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [pinCode, setPinCode] = useState<string[]>(new Array(4).fill(""));
    const [activePinIndex, setActivePinIndex] = useState<number>(0);
    
    const inputRef = useRef<HTMLInputElement>(null);

    const handlePinCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const newPinCode: string[] = [...pinCode]
        newPinCode[currentPinCodeIndex] = value.substring(value.length - 1);
        // 文字を消したら前の文字にFocusする
        if (!value) {
            setActivePinIndex(currentPinCodeIndex - 1);
        } else {
            // 文字を入力したら次の文字にFocusする
            setActivePinIndex(currentPinCodeIndex + 1);
        }
        setPinCode(newPinCode);
    }

    const handlePinCodeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        currentPinCodeIndex = index;
        if (e.key === "Backspace") {
            setActivePinIndex(index - 1);
        }
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [activePinIndex]);

    return (
        <div className="flex w-full justify-center items-center flex-col p-4 gap-4">
            <div className="text-center">
                <h1 className="text-2xl font-bold p-4">NFT取得</h1>
                <p>以下のNFTを取得しようとしています</p>
                <div className="flex justify-center gap-4">
                    <div className="badge badge-primary">NiFT Official</div>
                </div>
            </div>
            <hr />
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">コードチェック</h2>
                    <p>QRコードと一緒に書かれている<br/>確認の4桁の数字を入力してください</p>
                    <div className="flex justify-center p-4">
                        {
                            pinCode.map((v, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <input
                                            ref={i === activePinIndex ? inputRef : null}
                                            value={pinCode[i]}
                                            type="number"
                                            maxLength={1}
                                            className="w-12 h-16 mx-1 border rounded-xl bg-transparent outline-none text-center
                                                    font-bold text-xl border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition spin-button-none"
                                            onChange={(e) => handlePinCodeChange(e)}
                                            onKeyDown={(e) => handlePinCodeKeyDown(e, i)}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="card-actions p-4">
                    <button className="btn btn-primary w-full">Get NFT</button>
                </div>
            </div>
        </div>
    );
}

export default Get;