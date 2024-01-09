'use client'
import { getRoom } from "@/libs/apis";
import React from "react";
import useSWR from "swr";
import LoadingSpinner from "../../loading";
import HotelPhotoGallary from "@/components/HotelPhotoGallary/HotelPhotoGallary";

const RoomDetails = (props: { params: { slug: string } }) => {

    const { params: { slug }, } = props;
    // console.log(slug);
    const fetchRoom = async () => getRoom(slug)

    const { data: room, error, isLoading } = useSWR('/api/room', fetchRoom);

    if (error) throw new Error('Cannot fetch data');
    if (typeof room === 'undefined' && !isLoading)
        throw new Error('Cannot fetch data');
    if (!room) return <LoadingSpinner />
    console.log(room);


    return <div>
        <HotelPhotoGallary photos={room.images} />
    </div>;
};

export default RoomDetails;
