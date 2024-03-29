'use client';
import ThemeContext from '@/Context/ThemeContext';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';
import { IoMoon } from 'react-icons/io5';
import { MdOutlineLightMode } from 'react-icons/md';

export default function Header() {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    const { data: session } = useSession();
    //console.log(session);

    return (
        // clsssname = sticky top - 1 bg - slate - 900 z - 50
        <header className='  rounded-full py-5 px-4 container mx-auto text-xl mb-10 flex  flex-wrap md:flex-nowrap items-center justify-center'>
            <div className=' flex items-center w-full md:2/3 justify-between    md:justify-start '>
                <Link href='/' className='text-3xl font-black text-tertiary-dark '>
                    HOTEL
                </Link>
                <ul className='flex items-center ml-5'>
                    <li className='flex items-center'>
                        {session?.user ? (
                            <Link href={`/users/${session.user.id}`}>
                                {session.user.image ? (
                                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                                        <Image

                                            src={session.user.image}
                                            alt={session.user.name!}
                                            width={40}
                                            height={40}
                                            className='scale-animation img'
                                        />
                                    </div>
                                ) : (
                                    <FaUserCircle className='cursor-pointer w-10 ' />
                                )}
                            </Link>
                        ) : (
                            <Link href='/auth' className=''>
                                <FaUserCircle className='cursor-pointer w-10   ' />
                            </Link>
                        )}
                    </li>

                    <li className='ml-3'>
                        {darkTheme ? (
                            <MdOutlineLightMode
                                className='cursor-pointer text-3xl font-bold'
                                onClick={() => {
                                    setDarkTheme(false);
                                    localStorage.removeItem('hotel-theme');
                                }}
                            />
                        ) : (
                            <IoMoon
                                className='cursor-pointer text-3xl'
                                onClick={() => {
                                    setDarkTheme(true);
                                    localStorage.setItem('hotel-theme', 'true');
                                }}
                            />
                        )}
                    </li>
                </ul>
            </div>

            <ul className='flex items-center justify-between w-full md:w-1/3  '>
                <li className='hover:-translate-y-2 hover:font-semibold duration-500 transition-all '>
                    <Link href='/'>Home</Link>
                </li>
                <li className='hover:-translate-y-2 hover:font-semibold duration-500 transition-all  '>
                    <Link href='/rooms'>Rooms</Link>
                </li>
                <li className='hover:-translate-y-2 hover:font-semibold duration-500 transition-all '>
                    <Link href='/contact'>Contacts</Link>
                </li>
            </ul>
        </header>
    );
}
