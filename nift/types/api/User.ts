import { User } from ".prisma/client";
import { BasicResponse, FailedResponse } from "./Response";

export interface UserGetQuery {
    id: string;
}

export interface UserGetSuccessResponse extends BasicResponse {
    data: User;
}

export interface UserGetFailedResponse extends FailedResponse {}

export interface UserPostBody {
    id: string;
    user_name: string;
    wallet_address: string;
}

export interface UserPostSuccessResponse extends BasicResponse {
    data: User;
}

export interface UserPostFailedResponse extends FailedResponse {}
