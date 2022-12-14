import type { NextApiHandler } from "next";
import { UserGetFailedResponse, UserGetSuccessResponse, UserPostBody } from "types/api/User";
import { getToken } from "next-auth/jwt";
import prisma from "lib/prisma";

export const handler: NextApiHandler = async (req, res) => {
    /**
     * check jwt token
     */
    const token = await getToken({ req });

    if (token) {
        if (req.method === "GET") {
            try {
                // idを取得
                const { id } = req.query;
                // Please Add Validation for Request

                const user_id: string = id as string;

                if (user_id === "") {
                    const response: UserGetFailedResponse = {
                        status: "failed",
                        data: {
                            message: "id is required.",
                        },
                    };
                    return res.status(400).json(response);
                } else if (user_id !== "") {
                    const userResponse = await prisma.user.findUnique({
                        where: {
                            id: user_id,
                        },
                    });

                    console.log("User Response: \n", userResponse);

                    if (userResponse) {
                        const response: UserGetSuccessResponse = {
                            status: "success",
                            data: userResponse,
                        };
                        return res.status(200).json(response);
                    } else {
                        const response: UserGetFailedResponse = {
                            status: "failed",
                            data: {
                                message: "User was not found.",
                            },
                        };
                        return res.status(404).json(response);
                    }
                }
                const response: UserGetFailedResponse = {
                    status: "error",
                    data: {
                        message: "Something is wrong.",
                    },
                };
                return res.status(500).json(response);
            } catch (error) {
                // ValidationError or more error
                const response: UserGetFailedResponse = {
                    status: "error",
                    data: {
                        message: "Something is wrong.",
                    },
                };
                return res.status(500).json(response);
            }
        }

        if (req.method === "POST") {
            try {
                // idを取得
                const { id, user_name, wallet_address }: UserPostBody = req.body;
                // Please Add Validation for Request

                const user_id: string = id as string;
                const user_user_name: string = user_name as string;
                const user_wallet_address: string = wallet_address as string;

                if (user_id === "") {
                    const response: UserGetFailedResponse = {
                        status: "failed",
                        data: {
                            message: "id is required.",
                        },
                    };
                    return res.status(400).json(response);
                } else if (user_id !== "") {
                    // user_idに一致するデータベースの名前とWalletのデータを更新
                    const userResponse = await prisma.user.update({
                        where: {
                            id: user_id,
                        },
                        data: {
                            user_name: user_user_name,
                            wallet_address: user_wallet_address,
                        },
                    });

                    console.log("User Response: \n", userResponse);

                    if (userResponse) {
                        const response: UserGetSuccessResponse = {
                            status: "success",
                            data: userResponse,
                        };
                        return res.status(200).json(response);
                    } else {
                        const response: UserGetFailedResponse = {
                            status: "failed",
                            data: {
                                message: "User was not found.",
                            },
                        };
                        return res.status(404).json(response);
                    }
                }
                const response: UserGetFailedResponse = {
                    status: "error",
                    data: {
                        message: "Something is wrong.",
                    },
                };
                return res.status(500).json(response);
            } catch (error) {
                // ValidationError or more error
                const response: UserGetFailedResponse = {
                    status: "error",
                    data: {
                        message: "Something is wrong.",
                    },
                };
                return res.status(500).json(response);
            }
        }
    } else {
        const response: UserGetFailedResponse = {
            status: "error",
            data: {
                message: "UnAuthorized.",
            },
        };
        return res.status(401).json(response);
    }
};

export default handler;
