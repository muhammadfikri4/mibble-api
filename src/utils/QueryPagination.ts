import { QueryParams } from "../interface/QueryParams";

export const QueryPagination = (query: QueryParams) => {
    const { page = '1', perPage = '10' } = query
    return {
        skip: (Number(page) - 1) * Number(perPage),
        take: Number(perPage),
    }
}