import type { AspidaClient } from "aspida";
import { dataToURLString } from "aspida";
import type { Methods as Methods0 } from "./nft/check";
import type { Methods as Methods1 } from "./nft/create";
import type { Methods as Methods2 } from "./nft/get";
import type { Methods as Methods3 } from "./nft/reserved";
import type { Methods as Methods4 } from "./user";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
    const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
    const PATH0 = "/nft/check";
    const PATH1 = "/nft/create";
    const PATH2 = "/nft/get";
    const PATH3 = "/nft/reserved";
    const PATH4 = "/user";
    const GET = "GET";
    const POST = "POST";

    return {
        nft: {
            check: {
                post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
                    fetch<Methods0["post"]["resBody"]>(prefix, PATH0, POST, option).json(),
                $post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
                    fetch<Methods0["post"]["resBody"]>(prefix, PATH0, POST, option)
                        .json()
                        .then((r) => r.body),
                $path: () => `${prefix}${PATH0}`,
            },
            create: {
                post: (option: { body: Methods1["post"]["reqBody"]; config?: T | undefined }) =>
                    fetch<Methods1["post"]["resBody"]>(prefix, PATH1, POST, option).json(),
                $post: (option: { body: Methods1["post"]["reqBody"]; config?: T | undefined }) =>
                    fetch<Methods1["post"]["resBody"]>(prefix, PATH1, POST, option)
                        .json()
                        .then((r) => r.body),
                $path: () => `${prefix}${PATH1}`,
            },
            get: {
                get: (
                    option?:
                        | { query?: Methods2["get"]["query"] | undefined; config?: T | undefined }
                        | undefined,
                ) => fetch<Methods2["get"]["resBody"]>(prefix, PATH2, GET, option).json(),
                $get: (
                    option?:
                        | { query?: Methods2["get"]["query"] | undefined; config?: T | undefined }
                        | undefined,
                ) =>
                    fetch<Methods2["get"]["resBody"]>(prefix, PATH2, GET, option)
                        .json()
                        .then((r) => r.body),
                post: (option: { body: Methods2["post"]["reqBody"]; config?: T | undefined }) =>
                    fetch<Methods2["post"]["resBody"]>(prefix, PATH2, POST, option).json(),
                $post: (option: { body: Methods2["post"]["reqBody"]; config?: T | undefined }) =>
                    fetch<Methods2["post"]["resBody"]>(prefix, PATH2, POST, option)
                        .json()
                        .then((r) => r.body),
                $path: (
                    option?:
                        | { method?: "get" | undefined; query: Methods2["get"]["query"] }
                        | undefined,
                ) =>
                    `${prefix}${PATH2}${
                        option && option.query ? `?${dataToURLString(option.query)}` : ""
                    }`,
            },
            reserved: {
                get: (
                    option?:
                        | { query?: Methods3["get"]["query"] | undefined; config?: T | undefined }
                        | undefined,
                ) => fetch<Methods3["get"]["resBody"]>(prefix, PATH3, GET, option).json(),
                $get: (
                    option?:
                        | { query?: Methods3["get"]["query"] | undefined; config?: T | undefined }
                        | undefined,
                ) =>
                    fetch<Methods3["get"]["resBody"]>(prefix, PATH3, GET, option)
                        .json()
                        .then((r) => r.body),
                $path: (
                    option?:
                        | { method?: "get" | undefined; query: Methods3["get"]["query"] }
                        | undefined,
                ) =>
                    `${prefix}${PATH3}${
                        option && option.query ? `?${dataToURLString(option.query)}` : ""
                    }`,
            },
        },
        user: {
            get: (
                option?:
                    | { query?: Methods4["get"]["query"] | undefined; config?: T | undefined }
                    | undefined,
            ) => fetch<Methods4["get"]["resBody"]>(prefix, PATH4, GET, option).json(),
            $get: (
                option?:
                    | { query?: Methods4["get"]["query"] | undefined; config?: T | undefined }
                    | undefined,
            ) =>
                fetch<Methods4["get"]["resBody"]>(prefix, PATH4, GET, option)
                    .json()
                    .then((r) => r.body),
            post: (option: { body: Methods4["post"]["reqBody"]; config?: T | undefined }) =>
                fetch<Methods4["post"]["resBody"]>(prefix, PATH4, POST, option).json(),
            $post: (option: { body: Methods4["post"]["reqBody"]; config?: T | undefined }) =>
                fetch<Methods4["post"]["resBody"]>(prefix, PATH4, POST, option)
                    .json()
                    .then((r) => r.body),
            $path: (
                option?:
                    | { method?: "get" | undefined; query: Methods4["get"]["query"] }
                    | undefined,
            ) =>
                `${prefix}${PATH4}${
                    option && option.query ? `?${dataToURLString(option.query)}` : ""
                }`,
        },
    };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
