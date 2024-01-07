import sanityClient from "./sanity"
import * as queries from './sanityQueries'

export async function getFeaturedRoom(){
    const result = await sanityClient.fetch(
        queries.getFeaturedRoomQuary,
        {},
        {cache:'no-cache'});
    return result;
}



// const result = await sanityClient.fetch(queries.getFeaturedRoomQuery,{},{next:{revalidate:1800}})
