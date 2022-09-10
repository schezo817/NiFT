import {
    GetCodePostBody,
    GetCodePostFailedReponse,
    GetCodePostSuccessResponse,
    GetIdGetFailureResponse,
    GetIdGetQuery,
    GetIdGetSuccessResponse,
} from "types/api/Get";

export type Methods = {
    get: {
        query?: GetIdGetQuery;
        resBody: GetIdGetSuccessResponse | GetIdGetFailureResponse;
    };

    post: {
        reqBody: GetCodePostBody;
        resBody: GetCodePostSuccessResponse | GetCodePostFailedReponse;
    };
};
