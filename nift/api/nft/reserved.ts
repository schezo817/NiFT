import { ReservedGetFailedResponse, ReservedGetQuery, ReservedGetSuccessResponse } from "types/api/Reserved";

export type Methods = {
    get: {
        query?: ReservedGetQuery;
        resBody: ReservedGetSuccessResponse | ReservedGetFailedResponse;
    };
}