import { Room } from '@/models/room';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'

type Props = {
    room: Room;
}

const RoomCard: FC<Props> = (props) => {
    const { room: { coverImage, name, price, type, description, slug, isBooked } } = props;
    return (
        <div className='rounded-xl w-72 gap-2 mb-10 mx-auto  md:mx-0 overflow-hidden text-black  dark:text-white  '>
            <div className="h-60 overflow-hidden">
                <Image alt={name} src={coverImage.url} height={250} width={250}
                    className='img scale-animation' />
            </div>
            <div className="p-4    dark:bg-gray-950 bg-gray-100  ">
                <div className="flex justify-between text-xl font-semibold">
                    <p className="">{name}</p>
                    <p className="">${price}</p>
                </div>
                <p className="pt-2 text-xs ">{type} Room</p>
                <p className="pt-3 pb-16 ">{description.slice(1, 80)} ...</p>
                <Link href={`/rooms/${slug.current}`}
                    className='  inline-block text-center w-full py-4  bg-red-500 dark:bg-red-600 rounded-xl text-xl font-bold  text-black dark:text-white hover:-translate-y-2 hover:shadow-lg transition-all duration-500   px-4     
                     ' >
                    {isBooked ? 'BOOKED' : 'BOOK NOW'}
                </Link>
            </div>
        </div>
    )
}

export default RoomCard