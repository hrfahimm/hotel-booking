type CoverImage = {
    _key:string;
    url:string;
};
type Images = {
    _key:string;
    url:string;

}
type Amenity = {
    _key: string;
    amenity: string;
    icon:string;
}
type Slug = {
    _type: string;
    current: string;
    
}

export type Room = {
    _id:string;
    coverImage:CoverImage;
    description:string;
    dimenstion:string;
    discount:number;
    images:Images[];
    isBooked:boolean;
    isFreatured: boolean;
    name: string;
    numberOfBeds: number;
    offeredAmenities: Amenity[];
    price: number;
    slug: Slug;
    specialNote: string;
    type: string;


}