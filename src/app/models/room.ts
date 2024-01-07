type CoverImage = {
    _key:string;
    url:string;
};
type Images = {
    _key:string;
    url:string;

}

export type Room = {
    _id:string;
    converImage:CoverImage;
    description:string;
    dimenstion:string;
    discount:number;
    images:Images;
    isBooked:boolean;
    isFreat


}