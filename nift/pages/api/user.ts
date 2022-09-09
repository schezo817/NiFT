import type { NextApiHandler } from "next";
import { UserGetFailedResponse, UserGetSuccessResponse } from "types/api/User";
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
                            message: "id is required."
                        }
                    }
                    res.status(400).send(response);
                } else if (user_id !== "") {
                    const userResponse = await prisma.user.findUnique({
                        where: {
                            id: user_id
                        }
                    });

                    console.log(userResponse);

                    if (userResponse) {
                        const response: UserGetSuccessResponse = {
                            status: "success",
                            data: userResponse,
                        };
                        res.status(200).json(response);
                    } else {
                        const response: UserGetFailedResponse = {
                            status: "failed",
                            data: {
                                message: "User was not found.",
                            },
                        };
                        res.status(404).json(response);
                    }
                }
                const response: UserGetFailedResponse = {
                    status: "error",
                    data: {
                        message: "Something is wrong."
                    }
                }
                res.status(500).json(response);
             } catch (error) {
                // ValidationError or more error
                const response: UserGetFailedResponse = {
                    status: "error",
                    data: {
                        message: "Something is wrong."
                    }
                }
                res.status(500).json(response);
            }
        }

        if (req.method === "POST") {

        }
    } else {
        const response: UserGetFailedResponse = {
            status: "error",
            data: {
                message: "UnAuthorized.",
            },
        };
        res.status(401).json(response);
    }
    res.end();
};

export default handler;
