import { CreatePostBody, CreatePostFailedReponse, CreatePostSuccessResponse } from "types/api/Create";

export type Methods = {
    post: {
        reqBody: CreatePostBody;
        resBody: CreatePostSuccessResponse | CreatePostFailedReponse;
    };
}