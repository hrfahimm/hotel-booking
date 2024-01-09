'use client'
import Search from "@/components/PageSearch/Search"
import RoomCard from "@/components/RoomCard/RoomCard"
import { getRooms } from "@/libs/apis"
import { Room } from "@/models/room"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import useSWR from "swr"



const Rooms = () => {
    const [roomTypeFilter, setRoomTypeFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const searchParams = useSearchParams();

    useEffect(() => {
        const searchQuery = searchParams.get('searchQuery');
        const roomType = searchParams.get('roomType');

        if (roomType) setRoomTypeFilter(roomType);
        if (searchQuery) setSearchQuery(searchQuery);
    }, [searchParams]);


    async function fetchData() {
        return getRooms();
    }

    const { data, error, isLoading } = useSWR('get/hotelRooms', fetchData);

    if (error) throw new Error('Cannot fetch data');
    if (typeof data === 'undefined' && !isLoading)
        throw new Error('Cannot fetch data');

    // console.log(data)
    const filterRooms = (rooms: Room[]) => {
        return rooms.filter(room => {
            //applay room type filter
            if (roomTypeFilter &&
                roomTypeFilter.toLowerCase() !== 'all' &&
                room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
            ) { return false }

            //apply search query
            if (searchQuery &&
                !room.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) { return false }

            //else return true
            return true
        })
    }

    const filteredRooms = filterRooms(data || [])
    // console.log(filteredRooms)


    return (
        <div className="container mx-auto pt-10">
            <Search roomTypeFilter={roomTypeFilter} setRoomTypeFilter={setRoomTypeFilter} searchQuary={searchQuery} setSearchQuary={setSearchQuery} />
            <div className="flex mt-20 justify-around flex-wrap ">
                {
                    filteredRooms.map(room => (
                        <RoomCard key={room._id} room={room} />
                    ))
                }
            </div>
        </div>
    )
}

export default Rooms