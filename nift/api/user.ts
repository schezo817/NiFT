import {
    UserGetQuery,
    UserGetSuccessResponse,
    UserGetFailedResponse,
    UserPostBody,
    UserPostSuccessResponse,
    UserPostFailedResponse,
} from "types/api/User";

export type Methods = {
    get: {
        query?: UserGetQuery;
        resBody: UserGetSuccessResponse | UserGetFailedResponse;
    };

    post: {
        reqBody: UserPostBody;
        resBody: UserPostSuccessResponse | UserPostFailedResponse;
    };
};
