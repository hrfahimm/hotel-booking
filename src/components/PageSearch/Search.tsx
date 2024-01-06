'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";
type Props = {
    roomTypeFilter: string;
    searchQuary: string;
    setRoomTypeFilter: (value: string) => void;
    setSearchQuary: (value: string) => void;


}
const Search: FC<Props> = ({ setSearchQuary, setRoomTypeFilter, searchQuary, roomTypeFilter }) => {
    const router = useRouter()

    const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setRoomTypeFilter(event.target.value)
    }

    const handleSearchQyaruChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuary(event.target.value)
    }
    const handleFilterClick = () => {
        router.push(`/rooms?roomTypes=${roomTypeFilter}&searchQuery=${searchQuary}`)
    }
    return <section className="">
        <div className="bg-tertiary-light px-4 py-6 rounded-lg my-6">
            <div className="container mx-auto flex flex- gap-4 flex-wrap justify-between items-center">
                <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
                    <label htmlFor="" className="block text-sm mb-2 to-black uppercase  font-semibold pl-2">Room Type</label>
                    <div className="relative">
                        <select name="" id="" className="w-full px-6 py-1 capitalize rounded-xl leading-tight dark:bg-black focus:outline-none"
                            value={roomTypeFilter}
                            onChange={handleRoomTypeChange}
                        >
                            <option value="all" key="">All</option>
                            <option value="Basic" key="">Basic</option>
                            <option value="Luxury" key="">Luxury</option>
                            <option value="Suite" key="">Suite</option>
                        </select>
                    </div>
                </div>
                <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0 ">
                    <label htmlFor="" className="block text-sm mb-2 to-black  uppercase  font-semibold pl-2">Search</label>
                    <input type="search" id="search" placeholder="search..."
                        className="w-full px-4 py-2 rounded-xl leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white"
                        value={searchQuary}
                        onChange={handleSearchQyaruChange}
                    />
                </div>
                <button className="btn-secondary " type="button"
                    onClick={handleFilterClick}
                >
                    Search
                </button>

            </div>
        </div>
    </section>;
}


export default Search;
