import type { NextApiHandler } from "next";
import { UserGetFailedResponse, UserGetSuccessResponse } from "types/api/User";
import { getToken } from "next-auth/jwt";
import prisma from "lib/prisma";

export const handler: NextApiHandler = async (req, res) => {
    const token = await getToken({ req });

    if (token) {
        console.log("JSON Web Token", JSON.stringify(token, null, 2));
        const { method } = req;

        switch (method) {
            /**
             * ユーザ情報を取得するAPI
             */
            case "GET":
                try {
                    // Please Add Validation for Request
                    const id = "";
                } catch (error) {

                }
                break;
            /**
             * ユーザ情報を更新するAPI
             */
            case "POST":
                break;
        }

        try {
            const id: string = "cl7un6nga0010r4mcd4zu0nov";
            const userResponse = await prisma.user.findUnique({
                where: {
                    id
                }
            });

            console.log(userResponse);

            if (userResponse) {
                const response: UserGetSuccessResponse = {
                    status: "success",
                    data: userResponse
                }
                res.status(200).json(response);
            } else {
                const response: UserGetFailedResponse = {
                    status: "erorr",
                    data: {
                        message: "User was not found."
                    }
                }
                res.status(404).json(response);
            }
        } catch (error) {
            // UnAuthorizedError
            // ValidationError
            res.status(400).json({});
        }
    } else {
        const response: UserGetFailedResponse = {
            status: "error",
            data: {
                message: "UnAuthorized."
            }
        }
        res.status(401).json(response);
    }
    res.end();
}

export default handler;
