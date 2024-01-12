export type CoverImage = {
    _key: string;
    url: string;
};
export type Image = {
    _key: string;
    url: string;

}
export type Amenity = {
    _key: string;
    amenity: string;
    icon: string;
}
export type Slug = {
    _type: string;
    current: string;

}

export type Room = {
    _id: string;
    coverImage: CoverImage;
    description: string;
    dimension: string;
    discount: number;
    images: Image[];
    isBooked: boolean;
    isFreatured: boolean;
    name: string;
    numberOfBeds: number;
    offeredAmenities: Amenity[];
    price: number;
    slug: Slug;
    specialNote: string;
    type: string;


}