'use client'
import ThemeContext from "@/Context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle, } from "react-icons/fa"
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


export default function Header() {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext)
    return (
        <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-center">
            <div className="flex items-center w-full md:2/3 ">
                <Link href="/" className="font-black text-tertiary-dark ">
                    HOTEL
                </Link>
                <ul className="flex items-center ml-5" >
                    <li className="flex items-center">
                        <Link href='/auth' className="">
                            <FaUserCircle className="cursor-pointer " />
                        </Link>
                    </li>
                    <li className="ml-2">
                        {darkTheme ? (<MdOutlineLightMode
                            className="cursor-pointer"
                            onClick={() => {
                                setDarkTheme(false);
                                localStorage.removeItem("hotel-theme")
                            }} />)
                            :
                            (<MdDarkMode
                                className="cursor-pointer"
                                onClick={() => {
                                    setDarkTheme(true);
                                    localStorage.setItem("hotel-theme", "true")
                                }} />)}

                    </li>
                </ul>
            </div>
            <ul className="flex items-center justify-between w-full md:w-1/3 mt-4 ">
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href="/home">Home</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href="/rooms">Rooms</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href="/contact">Contacts</Link>
                </li>
            </ul>

        </header>);
}
