import { groq } from "next-sanity";

export const getFeaturedRoomQuary = groq`*[_type == "hotelRoom" && isFeatured == true] [0] {
    _id,description,discount,images,isFeatured,name,price,slug}`