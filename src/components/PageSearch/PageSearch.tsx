'use client'
import { useState } from "react";
import Search from "./Search";


export default function PageSearch() {
    const [roomTypeFilter, searchRoomTypeFilter] = useState('')
    const [searchQuary, setSearchQuary] = useState('')

    return (
        <>
            <Search
                roomTypeFilter={roomTypeFilter}
                searchQuary={searchQuary}
                setRoomTypeFilter={searchRoomTypeFilter}
                setSearchQuary={setSearchQuary}
            />

        </>
    );
}
