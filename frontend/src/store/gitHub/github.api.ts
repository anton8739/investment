import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ServerResponse} from "../../models/common/common";
import {IUser} from "../../models/user/user";

export const githubApi = createApi({
    reducerPath : 'github/app',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://api.github.com/'
    }),
    endpoints: build => ({
        searchUsers : build.query<IUser[], string>({
            query : search => ({
                url : 'search/users',
                params : {
                    q : search,
                    per_page : 5,
                }
            }),
            transformResponse : (response:ServerResponse<IUser>) => response.items
        })
    })
})
export const {useSearchUsersQuery} = githubApi