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
export type createBookingDto = {
    hotelRoom: string;
    user: string;

    checkinDate: string;
    checkoutDate: string;
    numberOfDays: number;
    adults: number;
    children: number;
    totalPrice: number;
    discount: number;
};
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
export type Booking = {
    _id: string;
    hotelRoom: {
        _id: string;
        name: string;
        slug: { current: string };
        price: number;
    };
    checkinDate: string;
    checkoutDate: string;
    numberOfDays: number;
    adults: number;
    children: number;
    totalPrice: number;
    discount: number;
};

export type User = {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    about: string | null;
    _createdAt: string;
    image: string;
};


export type UpdateReviewDto = {
    reviewId: string;
    reviewText: string;
    userRating: number;
};

export type CreateReviewDto = {
    hotelRoomId: string;
    reviewText: string;
    userRating: number;
    userId: string;
};

export type Review = {
    text: string;
    user: { name: string };
    userRating: number;
    _createdAt: Date;
    _id: string;
};