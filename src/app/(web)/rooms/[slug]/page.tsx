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
        <div className="container mt-20 mx-auto">
            <div className="md:grid md:grid-cols-12 gap-10 px-3">
                <div className="md:col-span-8 md:w-full">
                    <div className="">
                        <h2 className="font-bold  text-left text-lg md:text-2xl">{room.name}</h2>
                        <h3>{room.dimension}</h3>
                    </div>
                </div>
                <div className="md:col-span-4  rounded-xl shadow-lg dark:shadow dark:shadow-white sticky top-10 h-fit overflow-auto">
                    {/* {room cta} */}
                </div>
            </div>
        </div>
    </div>;
};

export default RoomDetails;
