import { CheckPostBody, CheckPostFailureResponse, CheckPostSuccessResponse } from "types/api/Check";

export type Methods = {
    post: {
        reqBody: CheckPostBody;
        resBody: CheckPostSuccessResponse | CheckPostFailureResponse;
    };
};
