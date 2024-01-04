import React from "react";

export default function Search() {
    const roomTypeFilter = {

    }
    const handleRoomTypeChange = {

    }


    return <section>
        <div className="bg-tertiary-light px-4 py-6 rounded-lg ">
            <div className="container mx-auto flex flex- gap-4 flex-nowrap justify-between items-center">
                <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
                    <label htmlFor="" className="block text-sm mb-2 to-black uppercase  font-semibold pl-2">Room Type</label>
                    <div className="relative">
                        <select name="" id="" className="w-full px-4 py-1 capitalize rounded leading-tight dark:bg-black focus:outline-none"
                        // value={roomTypeFilter}
                        // onChange={handleRoomTypeChange}
                        >
                            <option value="all" key="">All</option>
                            <option value="Basic" key="">Basic</option>
                            <option value="Luxury" key="">Luxury</option>
                            <option value="Suite" key="">Suite</option>
                        </select>
                    </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0 ">
                    <label htmlFor="" className="block text-sm mb-2 to-black  uppercase  font-semibold pl-2">Search</label>
                    <input type="search" id="search" placeholder="search..."
                        className="w-full px-4 py-2 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white"
                    // value={searchQuary}
                    //onChange={handleSearchQyaruChange}
                    />
                </div>
                <button className="btn-secondary " type="button"
                //onClick={handleFilterClick}
                >
                    Search
                </button>

            </div>
        </div>
    </section>;
}
