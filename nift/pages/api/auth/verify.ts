import { ethers } from "ethers";

export default async function apiVerify(
    req: { body: { message: any; address: any; signature: any } },
    res: { send: (arg0: { isVerified: boolean }) => void },
) {
    const { message, address: expected, signature } = req.body;
    const digest = ethers.utils.hashMessage(message);
    const actual = ethers.utils.recoverAddress(digest, signature);
    const isVerified = actual === expected;

    res.send({ isVerified });
}
